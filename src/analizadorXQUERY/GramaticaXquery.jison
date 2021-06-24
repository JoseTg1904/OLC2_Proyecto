%lex
%s Comentario
%%

[\s+\r\t\f]={}
//Expresion Regular para manejar comentarios en el XQUERY
[(][:][^:]*[:]+([^()*][^)]*[:]+)*[)]   {return 'ComentarioM'}
//Palabras reservadas
"node"               {return "tk_node";}
"for"               {return "tk_for";}
"in"               {return "tk_in";}

"where"               {return "tk_where";}
"order"               {return "tk_order";}
"by"               {return "tk_by";}
"return"               {return "tk_return";}
"if"               {return "tk_if";}
"else"               {return "tk_else";}
"then"               {return "tk_then";}
"return"               {return "tk_return";}
"and"               {return "tk_and";}
"let"               {return "tk_let";}
"int"               {return "tk_int";}
"integer"               {return "tk_integer";}
"string"               {return "tk_string";}
"decimal"               {return "tk_DECIMAL";}
"double"               {return "tk_double";}
"declare"               {return "tk_declare";}
"function"               {return "tk_function";}
"AS"                      {return "tk_AS"}
"as"                      {return "tk_as"}
"xs"                      {return "tk_xs"}
"to"                      {return "tk_to"}
"at"                      {return "tk_at"}
"local"               {return "tk_local";}


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

"{"  {return "llaveA"}
"}"  {return "llaveC"}
";"  {return "tk_punto_coma"}
"."  {return "tk_punto"}
","  {return "tk_coma"}
"/"  {return "tk_diagonal"}
"*"  {return "tk_asterisco"}
"?"  {return "tk_Interroga"}

"+"  {return "tk_mas"}
"-"  {return "tk_menos"}
"<=" {return "tk_menorIgual"}
">=" {return "tk_mayorIgual"}
"gt" { return "tk_gt"}
"lt" { return "tk_lt"}

"<"  {return "tk_menor"}
">"  {return "tk_mayor"}
"!=" {return "tk_distinto"}

":=" {return "tk_igualXQUERY"}
":"  {return "tk_dosPuntos"}
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
%left tk_or
%left tk_and
%left tk_barra
%left tk_igual tk_distinto
%left tk_mayorIgual tk_mayor tk_menorIgual  tk_menor tk_lt tk_gt
%left tk_diagonal
%left tk_llaveA tk_llaveC
%left tk_div tk_asterisco
%left tk_mas tk_menos
%left tk_parA tk_parC

%start INICIO_XQUERY
%%
INICIO_XQUERY : INSTRUCCIONES EOF
;
FUNCION:
tk_declare tk_function MENU_LOCAL tk_dosPuntos
tk_identificador tk_parA LISTA_DECLARACION_FUNCION 
tk_parC  tk_as  tk_xs     tk_dosPuntos TIPO_DATO MENU_INTERROGA
llaveA  INSTRUCCIONES llaveC tk_punto_coma

;


MENU_INTERROGA : tk_Interroga 
| 
;

/*
$p as xs:decimal?
*/
LISTA_DECLARACION_FUNCION :  LISTA_DECLARACION_FUNCION  tk_coma DECLARACION_FUNCION
| DECLARACION_FUNCION

;
DECLARACION_FUNCION:
    tk_identificadorXQUERY tk_as tk_xs  tk_dosPuntos TIPO_DATO
    MENU_INTERROGA

;


MENU_LOCAL:
tk_local
//aqui voy a meter mas pero no se si solo se pueden declarar funciones localres 

;

TIPO_DATO:
tk_int
|tk_string
|tk_double
|tk_DECIMAL
|tk_integer

;

INSTRUCCIONES : INSTRUCCIONES INSTRUCCION 
|INSTRUCCION

;

INSTRUCCION :
DECLARACION_GLOBAL
|FUNCION
|ComentarioM
|IF
|FOR    
|LLAMADA_FUNCION
|START_XML
|WHERE
|RETURN_CICLO




;

/*
*/
XPATH :
INICIO_XPATH 
;


/*

for $x in (10,20), $y in (100,200)
return <test>x={$x} and y={$y}</test>

*/
FOR :
 tk_for  DECLARACIONES_FOR OPCIONES_FOR

;

DECLARACIONES_FOR:

DECLARACIONES_FOR tk_coma DECLARACION_FOR
|DECLARACION_FOR
;
DECLARACION_FOR:
 tk_identificadorXQUERY  OPCION_AT tk_in    FOR_REC


;
OPCION_AT:
tk_at  tk_identificadorXQUERY
|
;

FOR_REC:

XPATH
|EXPRESION 
|CORDERNADA

;
//111111111+1111


OPCIONES_FOR:
OPCIONES_FOR OPCION_FOR 
|OPCION_FOR
;
OPCION_FOR:
WHERE
|ORDER
|RETURN_CICLO
;
WHERE :
  tk_where EXPRESION

;

CONDITIONES_WHERE:
CONDITIONES_WHERE tk_and EXPRESION
|EXPRESION
;


ORDER : tk_order  tk_by LISTA_ORDER
;

LISTA_ORDER:
LISTA_ORDER tk_coma ORDER_ 
|ORDER_




;

ORDER_ :  tk_identificadorXQUERY XPATH
| tk_identificadorXQUERY 

;

RETURN_CICLO:
tk_return
tk_identificadorXQUERY XPATH
|tk_return
INSTRUCCIONES
|tk_return EXPRESION
;



LISTA_ASIGNACION:
LISTA_ASIGNACION tk_and ASIGNACION_SIMPLE
|ASIGNACION_SIMPLE

;

ASIGNACION_SIMPLE :
tk_identificador tk_igual  valor_if
|TK tk_identificadorXQUERY tk_igual valor_if
;


IF : tk_if  CONDICION  tk_then valor_if  ELSE ;

ELSE :
tk_else valor_if
|tk_else IF

| 

;

valor_if:
EXPRESION
| INSTRUCCION
|VALOR
|
     
;


LLAMADA_FUNCION:
tk_local tk_dosPuntos tk_identificador  EXPRESIONQUERY  
;
CONDICION : tk_parA OPCIONES_CONDICION tk_parC 

;

OPCIONES_CONDICION:
EXPRESION
|tk_identificadorXQUERY XPATH

;

DECLARACION_GLOBAL :
tk_let tk_identificadorXQUERY  tk_igualXQUERY EXPRESIONQUERY {console.log($2+"--val"+$4) }

;


LISTA_ID : LISTA_ID tk_coma tk_identificadorXQUERY
| tk_identificadorXQUERY;







START_XML : RAICES    
    ;

RAICES:
    RAICES OBJETO          
	| OBJETO ;

OBJETO:
      tk_menor LATRIBUTOS tk_identificador  tk_mayor OBJETOS           tk_menor tk_diagonal tk_identificador tk_mayor      
    | tk_menor LATRIBUTOS tk_identificador tk_mayor LISTA_ID_OBJETO   tk_menor tk_diagonal tk_identificador tk_mayor  {console.log($7)}     
    | tk_menor LATRIBUTOS tk_diagonal tk_identificador  tk_mayor                                       
    ;
LATRIBUTOS: ATRIBUTOS                            
           |                                     
;

ATRIBUTOS:
    ATRIBUTOS ATRIBUTO                           
    | ATRIBUTO                                   
;

ATRIBUTO: 
   tk_identificador tk_igual tk_string              
;



LISTA_ID_OBJETO: LISTA_ID_OBJETO Listavalor    { $$ = $1 + "" + $2; }   
        | Listavalor                           { $$ = $1; }     
;

OBJETOS:
      OBJETOS OBJETO       
	| OBJETO               
    ;

    
 Listavalor 
        :  tk_stringTexto      {$$=$1}        
        |   tk_identificador          {$$=$1}         
        |   tk_decimal    {$$=$1}        
        | VALORES
        |tk_entero
        |LISTA_ASIGNACION
        | valor
     

   
;
VALORES:
VALORES tk_punto VALOR
|VALOR

;

VALOR:
    llaveA  INSTRUCCIONES llaveC
    
        |   llaveA  EXPRESION llaveC


;
















/*
esta parte llama al xpath 
*/



INICIO_XPATH :
    INICIO ;

INICIO : 
    INICIO tk_barra INICIALES 
        
    | INICIALES 
    
     ;

INICIALES : 
    tk_punto DIAGONALES DERIVADOSLIMITADO DERIVACIONDIAGONAL
     
    | tk_identificador PREDICATE DERIVACIONDIAGONAL
   
    | tk_diagonal DERIVADOS DERIVACIONDIAGONAL 
       
    | tk_diagonal tk_diagonal DERIVADOS DERIVACIONDIAGONAL 
               
    | tk_asterisco PREDICATE DERIVACIONDIAGONAL
     
    | tk_node tk_parA tk_parC PREDICATE DERIVACIONDIAGONAL
   ;

DIAGONALES : 
    tk_diagonal 
    
    | tk_diagonal tk_diagonal 
      
    |   error tk_diagonal                                                                            
      
        ;

DERIVACIONDIAGONAL : 
    DIAGONALES DERIVADOS DERIVACIONDIAGONAL 
      
    |   ;

DERIVADOSLIMITADO :
    tk_identificador PREDICATE 
       
    | tk_asterisco PREDICATE 
       
    | tk_node tk_parA tk_parC PREDICATE 
     
    | tk_arroba ATRIBUTO
       
    
    | AXES 
      ;

DERIVADOS : 
    tk_punto 
     
    | tk_punto tk_punto 
     
    | DERIVADOSLIMITADO 
       };

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
       
    | 
       ;

EXPRESION :
    EXPRESION tk_mas EXPRESION
      
    | EXPRESION tk_menos EXPRESION
       

       
    | EXPRESION tk_div EXPRESION
        
      
    | EXPRESION tk_mod EXPRESION
       
    | EXPRESION tk_menor EXPRESION
    | EXPRESION tk_lt EXPRESION
    | EXPRESION tk_gt EXPRESION
        
    | EXPRESION tk_mayor EXPRESION
       
    | EXPRESION tk_menorIgual EXPRESION
      
    | EXPRESION tk_mayorIgual EXPRESION
        
    | EXPRESION tk_igual EXPRESION
       
    | EXPRESION tk_distinto EXPRESION
       
    | EXPRESION tk_or EXPRESION
       | EXPRESION tk_to EXPRESION
       
    | EXPRESION tk_and EXPRESION

       
    | tk_entero 
      
    | tk_decimal
        
    | tk_arroba ATRIBUTO
       
    | tk_identificador
        
    | tk_position tk_parA tk_parC
            
    | tk_last tk_parA tk_parC
       
    | tk_stringTexto
    | tk_identificadorXQUERY OPCION_IDQ
        
    | tk_parA EXPRESION tk_parC
    | EXPRESION tk_parA EXPRESION tk_parC
    |LLAMADA_FUNCION
  


        ;



 OPCION_IDQ:
 XPATH
 |;       

CORDERNADA:

tk_parA   EXPRESION tk_coma EXPRESION tk_parC

;

EXPRESIONQUERY: 
    EXPRESION
    | LLAMADA_FUNCION
    | START_XML;

ATRIBUTO :
    tk_asterisco 
       
    | tk_identificador 
        
    | tk_node tk_parA tk_ParC 
         ;
