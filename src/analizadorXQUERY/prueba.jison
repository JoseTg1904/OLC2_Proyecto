%lex
%s Comentario
%%

[\s+\r\t\f]={}
//Expresion Regular para manejar comentarios en el XQUERY
[(][:][^:]*[:]+([^()*][^)]*[:]+)*[)]   {return 'ComentarioM'}
//Palabras reservadas
"node"     {console.log(yytext+"--");return "tk_node";  }
"for"      {console.log(yytext+"--"); return "tk_for";}
"in"       {console.log(yytext+"--"); return "tk_in";}
"where"    {console.log(yytext+"--"); return "tk_where";}
"order"    {console.log(yytext+"--"); return "tk_order";}
"by"       {console.log(yytext+"--"); return "tk_by";}
"return"   {console.log(yytext+"--"); return "tk_return";}
"if"       {console.log(yytext+"--");return "tk_if";}
"else"     {console.log(yytext+"--");return "tk_else";}
"then"     {console.log(yytext+"--");return "tk_then";}
"return"   {console.log(yytext+"--");return "tk_return";}
"and"      {console.log(yytext+"--");return "tk_and";}
"let"      {console.log(yytext+"--");return "tk_let";}
"int"      {console.log(yytext+"--");return "tk_int";}
"integer"  {console.log(yytext+"--");return "tk_integer";}
"string"   {console.log(yytext+"--");return "tk_string";}
"decimal"  {console.log(yytext+"--");return "tk_DECIMAL";}
"double"   {console.log(yytext+"--");return "tk_double";}
"declare"  {console.log(yytext+"--");return "tk_declare";}
"function" {console.log(yytext+"--");return "tk_function";}
"AS"       {console.log(yytext+"--");return "tk_AS"}
"as"       {console.log(yytext+"--");return "tk_as"}
"xs"       {console.log(yytext+"--");return "tk_xs"}
"to"       {console.log(yytext+"--");return "tk_to"}
"at"       {console.log(yytext+"--");return "tk_at"}
"local"    {console.log(yytext+"--");return "tk_local";}


"child"              {console.log(yytext+"--");return "tk_child";}
"descendant"         {console.log(yytext+"--");return "tk_descendant";}
"descendant-or-self" {console.log(yytext+"--");return "tk_descendatOr"}
"ancestor"           {console.log(yytext+"--");return "tk_ancestor";}
"ancestor-or-self"   {console.log(yytext+"--");return "tk_ancestorOr";}
"attribute"          {console.log(yytext+"--");return "tk_attribute";}
"following"          {console.log(yytext+"--");return "tk_following";}
"following-sibling"  {console.log(yytext+"--");return "tk_followingSi"}
"parent"             {console.log(yytext+"--");return "tk_parent"}
"preceding"          {console.log(yytext+"--");return "tk_preceding"}
"preceding-sibling"  {console.log(yytext+"--");return "tk_precedingSi"}
"self"               {console.log(yytext+"--");return "tk_self"}
"text"               {console.log(yytext+"--");return "tk_text"}
"position"           {console.log(yytext+"--");return "tk_position"}
"last"               {console.log(yytext+"--");return "tk_last"}
"div"                {console.log(yytext+"--");return "tk_div"}
"and"                {console.log(yytext+"--");return "tk_and"}
"or"                 {console.log(yytext+"--");return "tk_or"}
"mod"                {console.log(yytext+"--");return "tk_mod"}

//conjunto de simbolos aceptados
"|"  {console.log(yytext+"--");return "tk_barra"}
"{"  {console.log(yytext+"--");return "llaveA"}
"}"  {console.log(yytext+"--");return "llaveC"}
";"  {console.log(yytext+"--");return "tk_punto_coma"}
"."  {console.log(yytext+"--");return "tk_punto"}
","  {console.log(yytext+"--");return "tk_coma"}
"+"  {console.log(yytext+"--");return "tk_mas"}
"*"  {console.log(yytext+"--");return "tk_asterisco"}
"-"  {console.log(yytext+"--");return "tk_menos"}
"/"  {console.log(yytext+"--");return "tk_diagonal"}

"?"  {console.log(yytext+"--");return "tk_Interroga"}

"<=" {console.log(yytext+"--");return "tk_menorIgual"}
">=" {console.log(yytext+"--");return "tk_mayorIgual"}
"gt" {console.log(yytext+"--"); return "tk_gt"}
"lt" {console.log(yytext+"--"); return "tk_lt"}
"<"  {console.log(yytext+"--");return "tk_menor"}
">"  {console.log(yytext+"--");return "tk_mayor"}
"!=" {console.log(yytext+"--");return "tk_distinto"}
":=" {console.log(yytext+"--");return "tk_igualXQUERY"}
":"  {console.log(yytext+"--");return "tk_dosPuntos"}
"="  {console.log(yytext+"--");return "tk_igual"}
"["  {console.log(yytext+"--");return "tk_llaveA"}
"]"  {console.log(yytext+"--");return "tk_llaveC"}
"@"  {console.log(yytext+"--");return "tk_arroba"}
"("  {console.log(yytext+"--");return "tk_parA"}
")"  {console.log(yytext+"--");return "tk_parC"}

//Expresiones para validar los strings
\"[^\"]*\"  {return "tk_stringTexto";}
\“[^\“]*\“  {return "tk_stringTexto";}
\'[^\']*\'  {return "tk_stringTexto";}
\‘[^\‘]*\‘  {return "tk_stringTexto";}
[0-9]+("."[0-9]+)\b {return "tk_decimal";}
[0-9]+\b            {return "tk_entero";}

//Expresion para un identificador
[a-zA-Z]([a-zA-Z0-9_])* {return "tk_identificador";
console.log("identificador normal")
}
//Expresion para un identificador de xquery


[$]([a-zA-Z0-9_])* {return "tk_identificadorXQUERY";
console.log("indentificador papa")
}

//IDENTIFICADOR PARA QUE ACEPTE LO QUE SEA
[^<]+                          return 'valor';
    
//Final del archivo
<<EOF>> return "EOF";

/*Espacios en blanco, tabulados, saltos de linea, salto de carro, el otro no se que es equis de
pero todo esto se ignora*/


//Estado sumidero donde van a caer todos los errores
. {         
    console.log('Léxico',yytext,yylloc.first_line,yylloc.first_column );
}
    
/lex

%{
  
%}

//Precedencia de operadores
%left tk_mod
%left tk_or tk_and 

%left tk_igual tk_distinto tk_igualXQUERY
%left   tk_menor tk_lt tk_gt tk_mayor tk_menorIgual  tk_mayorIgual

%left tk_llaveA tk_llaveC
%left tk_mas  tk_menos 
%left tk_asterisco tk_div tk_diagonal
 
%left tk_parA tk_parC

%start INICIO_XQUERY
%%
INICIO_XQUERY : INSTRUCCIONES EOF;

FUNCION:
    tk_declare tk_function MENU_LOCAL tk_dosPuntos
    tk_identificador tk_parA LISTA_DECLARACION_FUNCION 
    tk_parC  tk_as  tk_xs     tk_dosPuntos TIPO_DATO MENU_INTERROGA
    llaveA  INSTRUCCIONES llaveC tk_punto_coma;


MENU_INTERROGA : 
    tk_Interroga 
    | ;

/*
$p as xs:decimal?
*/
LISTA_DECLARACION_FUNCION :  
    LISTA_DECLARACION_FUNCION  tk_coma DECLARACION_FUNCION
    | DECLARACION_FUNCION ;

DECLARACION_FUNCION:
    tk_identificadorXQUERY tk_as tk_xs  tk_dosPuntos TIPO_DATO
    MENU_INTERROGA;


MENU_LOCAL: tk_local
//aqui voy a meter mas pero no se si solo se pueden declarar funciones localres 
;

TIPO_DATO:
    tk_int
    | tk_string
    | tk_double
    | tk_DECIMAL
    | tk_integer;

INSTRUCCIONES : 
    INSTRUCCIONES INSTRUCCION 
    | INSTRUCCION;

INSTRUCCION :
    DECLARACION_GLOBAL
    | FUNCION
    | ComentarioM
    | IF
    | FOR    
    | LLAMADA_FUNCION
    | WHERE
    | RETURN_CICLO;

XPATH : INICIO_XPATH ;

/*
for $x in (10,20), $y in (100,200)
return <test>x={$x} and y={$y}</test>
*/
FOR :
    tk_for  DECLARACIONES_FOR OPCIONES_FOR;

DECLARACIONES_FOR:
    DECLARACIONES_FOR tk_coma DECLARACION_FOR
    | DECLARACION_FOR;

DECLARACION_FOR:
    tk_identificadorXQUERY OPCION_AT tk_in FOR_REC;

OPCION_AT:
    tk_at  tk_identificadorXQUERY
    | ;

FOR_REC:
    XPATH
    | EXPRESION 
    | CORDERNADA;
//111111111+1111

OPCIONES_FOR:
    OPCIONES_FOR OPCION_FOR 
    | OPCION_FOR ;

OPCION_FOR:
    WHERE
    | ORDER
    | RETURN_CICLO ;

WHERE :
    tk_where EXPRESION ;

CONDITIONES_WHERE:
    CONDITIONES_WHERE tk_and EXPRESION
    | EXPRESION ;

ORDER : 
    tk_order  tk_by LISTA_ORDER ;

LISTA_ORDER:
    LISTA_ORDER tk_coma ORDER_ 
    | ORDER_ ;

ORDER_ :  
    tk_identificadorXQUERY XPATH
    | tk_identificadorXQUERY ;

RETURN_CICLO:
    tk_return tk_identificadorXQUERY XPATH
    | tk_return INSTRUCCIONES
    | tk_return EXPRESION ;

LISTA_ASIGNACION:
    LISTA_ASIGNACION tk_and ASIGNACION_SIMPLE
    | ASIGNACION_SIMPLE ;

ASIGNACION_SIMPLE :
    tk_identificador tk_igual  valor_if
    | TK tk_identificadorXQUERY tk_igual valor_if ;

IF: 
    tk_if  CONDICION  tk_then valor_if  ELSE ;

ELSE:
    tk_else valor_if
    | tk_else IF
    | ;

valor_if:
    EXPRESION
    | INSTRUCCION
    | VALOR
   
    | ;


LLAMADA_FUNCION:
    tk_local tk_dosPuntos tk_identificador  EXPRESION {  $$ = $1+$2+$3+$4} ;

CONDICION : 
    tk_parA OPCIONES_CONDICION tk_parC ;

OPCIONES_CONDICION:
    EXPRESION
    | tk_identificadorXQUERY XPATH ;

DECLARACION_GLOBAL :
    tk_let tk_identificadorXQUERY  tk_igualXQUERY valor_if {console.log($2+"--val"+$4) } ;


LISTA_ID : 
    LISTA_ID tk_coma tk_identificadorXQUERY
    | tk_identificadorXQUERY;

/*
esta parte llama al xpath 
*/

INICIO_XPATH :
    INICIO ;

INICIO : 
    INICIO tk_barra INICIALES 
    | INICIALES ;

INICIALES : 
    tk_punto DIAGONALES DERIVADOSLIMITADO DERIVACIONDIAGONAL
    | tk_identificador PREDICATE DERIVACIONDIAGONAL
    | tk_diagonal DERIVADOS DERIVACIONDIAGONAL 
    | tk_diagonal tk_diagonal DERIVADOS DERIVACIONDIAGONAL 
    | tk_asterisco PREDICATE DERIVACIONDIAGONAL
    | tk_node tk_parA tk_parC PREDICATE DERIVACIONDIAGONAL ;

DIAGONALES : 
    tk_diagonal 
    | tk_diagonal tk_diagonal 
    | error tk_diagonal ;

DERIVACIONDIAGONAL : 
    DIAGONALES DERIVADOS DERIVACIONDIAGONAL 
    | ;

DERIVADOSLIMITADO :
    tk_identificador PREDICATE 
    | tk_asterisco PREDICATE 
    | tk_node tk_parA tk_parC PREDICATE 
    | tk_arroba ATRIBUTO
    | AXES ;

DERIVADOS : 
    tk_punto 
    | tk_punto tk_punto 
    | DERIVADOSLIMITADO ;

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

EXPRESION : operacion


;

operacion 
        :       operacion tk_and operacion           {$$ = $1 + "and" + $3;}
        |       operacion tk_or operacion            {$$ = $1 + "or" + $3;}
        |       operacion_relacional              {$$ = $1;}
;

operacion_relacional
        :       operacion_numerica   tk_igual      operacion_numerica                {$$ = $1 + "==" + $3;}
        |       operacion_numerica   tk_distinto       operacion_numerica                {$$ = $1 + "!=" + $3;}
        |       operacion_numerica   tk_mayor           operacion_numerica                {$$ = $1 + ">" + $3;}
        |       operacion_numerica   tk_menor           operacion_numerica                {$$ = $1 + "<" + $3;}
        |       operacion_numerica   tk_to            operacion_numerica                {$$ = $1 + "<" + $3;}
        |       operacion_numerica   tk_gt           operacion_numerica                {$$ = $1 + "<" + $3;}
        |       operacion_numerica   tk_mayorIgual      operacion_numerica                {$$ = $1 + ">=" + $3;}
        |       operacion_numerica   tk_lt           operacion_numerica                {$$ = $1 + "<" + $3;}
        |       operacion_numerica   tk_menorIgual     operacion_numerica                {$$ = $1 + "<=" + $3;}
        |       operacion_numerica                                                     {$$ = $1;}
        ;

operacion_numerica 
        :   operacion_numerica   tk_mas             operacion_numerica                {$$ = $1 + "+" + $3;}
        |   operacion_numerica   tk_menos           operacion_numerica                {$$ = $1 + "-" + $3;}
        |   operacion_numerica   tk_asterisco  operacion_numerica                {$$ = $1 + "*" + $3;}
        |   operacion_numerica   tk_barra        operacion_numerica                {$$ = $1 + "/" + $3;}
        |   operacion_numerica   tk_div        operacion_numerica                {$$ = $1 + "/" + $3;}
        |   operacion_numerica   tk_mod        operacion_numerica                {$$ = $1 + "/" + $3;}
   
        |   valor                {$$ = $1;}
;

  

valor 
        :   tk_entero               {$$ = $1;} 
        |   tk_identificador                   {$$ = $1;}
        |  tk_decimal              {$$ = $1;}
        |   tk_string               {$$ = '\"'+$1+'\"';}  
        |   tk_arroba ATRIBUTO  
        | tk_identificadorXQUERY OPCION_IDQ
        |   localaux            
;

localaux
        : tk_position tk_parA tk_parC 
        | tk_last tk_parA tk_parC
        |  tk_parA EXPRESION tk_parC
        |  EXPRESION tk_parA EXPRESION tk_parC
        |LLAMADA_FUNCION


        
;




 
OPCION_IDQ:
    XPATH
    |;       

CORDERNADA:
    tk_parA EXPRESION tk_coma EXPRESION tk_parC ;

ATRIBUTO :
    tk_asterisco 
    | tk_identificador 
    | tk_node tk_parA tk_ParC ;