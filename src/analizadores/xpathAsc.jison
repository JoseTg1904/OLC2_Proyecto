%lex

%%

//Expresiones regulares para la aceptacion de numeros enteros y decimales
[0-9]+("."[0-9]+)\b {return "tk_decimal";}
[0-9]+\b            {return "tk_entero";}

//Palabras reservadas
"node"               {return "tk_node";}
"child"              {return "tk_child";}
"descendant"         {return "tk_descendant";}
"descendant-or-self" {return "tk_descendatOr"}
"ancestor"           {return "tk_ancestor";}
"ancestor-or-self"   {return "tk_ancestorOr";}
"attribute"          {return "tk_attribute";}
"following"          {return "tk_following";}
"following-sibling"  {return "tk_followingSi"}
"parent"             {return "tk_parent"}
"preceding"          {return "tk_preceding"}
"preceding-sibling"  {return "tk_precedingSi"}
"self"               {return "tk_self"}
"text"               {return "tk_text"}
"position"           {return "tk_position"}
"last"               {return "tk_last"}
"div"                {return "tk_div"}
"and"                {return "tk_and"}
"or"                 {return "tk_or"}
"mod"                {return "tk_mod"}

//conjunto de simbolos aceptados
"|"  {return "tk_barra"}
"."  {return "tk_punto"}
"/"  {return "tk_diagonal"}
"*"  {return "tk_asterisco"}
":" {return "tk_dosPuntos"}
"+"  {return "tk_mas"}
"-"  {return "tk_menos"}
"<=" {return "tk_menorIgual"}
">=" {return "tk_mayorIgual"}
"<"  {return "tk_menor"}
">"  {return "tk_mayor"}
"!=" {return "tk_distinto"}
"="  {return "tk_igual"}
"["  {return "tk_llaveA"}
"]"  {return "tk_llaveC"}
"@"  {return "tk_arroba"}
"("  {return "tk_parA"}
")"  {return "tk_parC"}

//Expresiones para validar los strings
\"[^\"]*\"  {return "tk_stringTexto";}
\“[^\“]*\“  {return "tk_stringTexto";}
\'[^\']*\'  {return "tk_stringTexto";}
\‘[^\‘]*\‘  {return "tk_stringTexto";}

//Expresion para un identificador
[a-zA-Z]([a-zA-Z0-9_])* {return "tk_identificador";}

//Final del archivo
<<EOF>> return "EOF";

/*Espacios en blanco, tabulados, saltos de linea, salto de carro, el otro no se que es equis de
pero todo esto se ignora*/
[ \t\r\n\f] {}

//Estado sumidero donde van a caer todos los errores
. {}

/lex

%{
    const { SalidaGramatica } = require("./AST/SalidaGramatica");
    const { Nodo } = require('./Expresiones/Nodo');
    //const { Atributo } = require('./Expresiones/Atributo');

    var produccion = [];
    var accion = [];
%}

//Precedencia de operadores
%left tk_mod
%left tk_or
%left tk_and
%left tk_barra
%left tk_igual tk_distinto
%left tk_mayorIgual tk_menorIgual tk_mayor tk_menor
%left tk_diagonal
%left tk_llaveA tk_llaveC
%left tk_div tk_asterisco
%left tk_mas tk_menos
%left tk_parA tk_parC

%start INICIOPURO
%%

INICIOPURO :
    INICIO EOF 
        {
            produccion.push('&lt;INICIOPURO&gt; ::= &lt;INICIO&gt; EOF');
            accion.push('INICIOPURO.Val = INICIO.val //fin del documento');
            $$ = $1;
            return new SalidaGramatica($$, produccion, accion);
        };

INICIO : 
    INICIO tk_barra INICIALES 
        { 
            produccion.push('&lt;INICIO&gt; ::= &lt;INICIO&gt; | &lt;INICIALES&gt;');
            accion.push('INICIO.Val = INICIO.push(INICIALES)');
            $1.push($3); 
            $$ = $1; 
        }   
    | INICIALES 
        {
            produccion.push('&lt;INICIO&gt; ::= &lt;INICIALES&gt;');
            accion.push('INICIO.Val = INICIALES.Val');
            $$ = $1; 
        };

INICIALES : 
    tk_punto DIAGONALES DERIVADOSLIMITADO DERIVACIONDIAGONAL
        {
            produccion.push(`&lt;INICIALES&gt; ::= punto &lt;DIAGONALES&gt; &lt;DERIVADOSLIMITADO&gt; &lt;DERIVAIONDIAGONAL&gt;`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo("", ".", [], @1.first_line, @1.first_column))
            $$.push(new Nodo($2, $3, [], @1.first_line, @1.first_column))
            $$.push(...$4)
        }
    | tk_identificador PREDICATE DERIVACIONDIAGONAL
        {
            produccion.push(`&lt;INICIALES&gt; ::= identificador &lt;PREDICATE&gt; &lt;DERIVACIONDIAGONAL&gt;`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo("", $1, [], @1.first_line, @1.first_column))
            $$.push(...$3)
        }
    | tk_diagonal DERIVADOS DERIVACIONDIAGONAL 
        {
            produccion.push(`&lt;INICIALES&gt; ::= / &lt;DERIVADOS&gt; &lt;DERIVACIONDIAGONAL&gt;`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo($1, $2, [], @1.first_line, @1.first_column))
            $$.push(...$3)
        }
    | tk_diagonal tk_diagonal DERIVADOS DERIVACIONDIAGONAL 
        {
            produccion.push('&lt;INICIALES&gt; ::= // &lt;DERIVADOS&gt; &lt;DERIVACIONDIAGONAL&gt;');
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo("//", $3, [], @1.first_line, @1.first_column))
            $$.push(...$4)
        }           
    | tk_asterisco PREDICATE DERIVACIONDIAGONAL
        {
            produccion.push(`&lt;INICIALES&gt; ::= asterisco &lt;PREDICATE&gt; &lt;DERIVACIONDIAGONAL&gt;`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo("", $1, [], @1.first_line, @1.first_column))
            $$.push(...$3)
        }
    | tk_node tk_parA tk_parC PREDICATE DERIVACIONDIAGONAL
        {
            produccion.push(`&lt;INICIALES&gt; ::= node() &lt;PREDICATE&gt; &lt;DERIVACIONDIAGONAL&gt;`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo("", "node()", [], @1.first_line, @1.first_column))
            $$.push(...$3)
        };

DIAGONALES : 
    tk_diagonal 
        {
            produccion.push('&lt;DIAGONALES&gt; ::= /');
            accion.push('DIAGONALES.Val = \"/\"'); 
            $$ = $1 
        }
    | tk_diagonal tk_diagonal 
        {
            produccion.push(`&lt;DIAGONALES&gt; ::= //`);
            accion.push('DIAGONALES.Val = \"//\"'); 
            $$ = "//" 
        };

DERIVACIONDIAGONAL : 
    DIAGONALES DERIVADOS DERIVACIONDIAGONAL 
        {
            produccion.push(`&lt;DERIVACIONDIAGONAL&gt; ::= &lt;DIAGONALES&gt; &lt;DERIVADOS&gt; &lt;DERIVACIONDIAGONAL&gt;`);
            accion.push('DERIVACIONDIAGONAL.Val = []; DERIVACIONDIAGONAL.Val.push(new Nodo(tipo, id, predicado, fila, columna)); DERIVACIONDIAGONAL.push(DERIVACIONDIAGONAL)'); 
            $$ = new Array();
            $$.push(new Nodo($1, $2, [], @1.first_line, @1.first_column)) 
            $$.push(...$3)
        }
    | { $$ = [null] };

DERIVADOSLIMITADO :
    tk_identificador PREDICATE  {$$ = $1}     
    | tk_asterisco PREDICATE {$$ = $1}
    | tk_node tk_parA tk_parC PREDICATE {$$ = $1}
    | tk_arroba ATRIBUTO
        {
            produccion.push(`&lt;DERIVADOSLIMIADO&gt; ::= arroba &lt;ATRIBUTO&gt;`);
            accion.push('DERIVADOSLIMITADO.Val = \"@\" + ATRIBUTO.Val'); 
            $$ = $1 + "" + $2; 
        }
    
    | AXES {$$ = $1};

DERIVADOS : 
    tk_punto 
        { 
            produccion.push(`&lt;DERIVADOS&gt; ::= punto`);
            accion.push("DERIVADOS.Val = \".\" ");
            $$ = $1; 
        }
    | tk_punto tk_punto 
        {
            produccion.push(`&lt;DERIVADOS&gt; ::= doblePunto`);
            accion.push('DERIVADOS.Val = \"..\"');
            $$ = ".."; }
    | DERIVADOSLIMITADO 
        { 
            produccion.push(`&lt;DERIVADOS&gt; ::= &lt;DERIVADOSLIMITADO&gt;`);
            accion.push('DERIVADOS.Val = DERIVADOSLIMITADO.Val'); 
            $$ = $1; 
        };

COMPLEMENTOATRIBUTO :
    tk_igual tk_stringTexto { $$ = $2; }
    | { $$ = "" };

AXES :
    tk_child tk_dosPuntos tk_dosPuntos NODETEST
    | tk_descendant tk_dosPuntos tk_dosPuntos NODETEST
    | tk_descendatOr tk_dosPuntos tk_dosPuntos NODETEST
    | tk_ancestor tk_dosPuntos tk_dosPuntos NODETEST
    | tk_ancestorOr tk_dosPuntos tk_dosPuntos NODETEST
    | tk_attribute tk_dosPuntos tk_dosPuntos NODETEST
    | tk_following tk_dosPuntos tk_dosPuntos NODETEST
    | tk_followingSi tk_dosPuntos tk_dosPuntos NODETEST
    | tk_parent tk_dosPuntos tk_dosPuntos NODETEST
    | tk_preceding tk_dosPuntos tk_dosPuntos NODETEST
    | tk_precedingSi tk_dosPuntos tk_dosPuntos NODETEST
    | tk_self tk_dosPuntos tk_dosPuntos NODETEST;

NODETEST :
    tk_asterisco PREDICATE
    | tk_node tk_parA tk_parC PREDICATE
    | tk_identificador PREDICATE
    | tk_text tk_parA tk_parC;

PREDICATE : 
    tk_llaveA EXPRESION tk_llaveC
    | ;

EXPRESION :
    EXPRESION tk_mas EXPRESION
    | EXPRESION tk_menos EXPRESION
    | EXPRESION tk_asterisco EXPRESION
    | EXPRESION tk_div EXPRESION
    | EXPRESION tk_menor EXPRESION
    | EXPRESION tk_mayor EXPRESION
    | EXPRESION tk_menorIgual EXPRESION
    | EXPRESION tk_mayorIgual EXPRESION
    | EXPRESION tk_or EXPRESION
    | EXPRESION tk_and EXPRESION
    | EXPRESION tk_mod EXPRESION
    | EXPRESION tk_igual EXPRESION
    | EXPRESION tk_distinto EXPRESION
    | tk_entero 
    | tk_decimal
    | tk_arroba ATRIBUTO
    | tk_identificador
    | tk_position tk_parA tk_parC
    | tk_last tk_parA tk_parC
    | tk_stringTexto
    | tk_parA EXPRESION tk_parC;

ATRIBUTO :
    tk_asterisco { $$ = $1; }
    | tk_identificador { $$ = $1 }
    | tk_node tk_parA tk_ParC { $$ = "node()"} ;