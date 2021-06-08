%lex

%%

//Expresiones regulares para la aceptacion de numeros enteros y decimales
[0-9]+("."[0-9]+)\b {return "tk_decimal";}
[0-9]+\b            {return "tk_entero";}

//Palabras reservadas
"node()"             {return "tk_node";}
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
"text()"             {return "tk_text"}
"position()"         {return "tk_position"}
"last()"             {return "tk_last"}
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

//Expresiones para validar los strings
\"[^\"]*\"  {return "tk_stringTexto";}
\“[^\“]*\“  {return "tk_stringTexto";}
\'[^\']*\'  {return "tk_charTexto";}
\‘[^\‘]*\‘  {return "tk_charTexto";}

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

%start INICIOPURO
%%

INICIOPURO :
    INICIO EOF;

INICIO : 
    INICIO tk_barra INICIO 
    | LISTADOPATH;

LISTADOPATH : 
    INICIALES LISTADOPATH
    | INICIALES;

INICIALES : 
    tk_punto DIAGONALES DERIVACIONINICIO
    | identificador PREDICATE
    | tk_diagonal DERIVACIONINICIO
    | tk_diagonal tk_diagonal DERIVACIONINICIO           
    | tk_asterisco PREDICATE
    | tk_node PREDICATE;

DIAGONALES : 
    tk_diagonal
    | tk_diagonal tk_diagonal;

DERIVACIONINICIO :
    tk_punto tk_punto DIAGONALES DERIVACIONINICIO
    | DERIVADOS
    | AXES;

DERIVADOS : 
    tk_punto DIAGONALES
    | tk_identificador PREDICATE       
    | tk_asterisco PREDICATE 
    | tk_node PREDICATE
    | tk_arroba ATRIBUTO;

COMPLEMENTOATRIBUTO :
    tk_igual tk_stringTexto
    | ;

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
    | tk_node PREDICATE
    | tk_identificador PREDICATE
    | tk_text;

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
    | tk_position
    | tk_last
    | tk_stringTexto;

ATRIBUTO :
    tk_asterisco
    | tk_identificador
    | tk_node;