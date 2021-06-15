/* Definición Léxica */
%lex

/*%options case-sensitive*/
%options case-insensitive

escapechar                          [\'\"\\bfnrtv]
escape                              \\{escapechar}
acceptedcharsdouble                 [^\"\\]+
stringdouble                        {escape}|{acceptedcharsdouble}
stringliteral                       \"{stringdouble}*\"

acceptedcharssingle                 [^\'\\]
stringsingle                        {escape}|{acceptedcharssingle}
charliteral                         \'{stringsingle}\'

BSL                                 "\\".
%s                                  comment
%%

"//".*                              /* skip comments */
"<!--"                              this.begin('comment');
<comment>"-->"                      this.popState();
<comment>.                          /* skip comment content*/
\s+                                 /* skip whitespace */

"&lt;"                      return 'lesst'
"&gt;"                      return 'greatert'
"&amp;"                     return 'ampersand'
"&apos;"                    return 'apostro'
"&quot;"                    return 'quotation'

"null"                      return 'null';
"true"                      return 'true';
"false"                     return 'false';
"xml"                       return 'xml';
"version"                   return 'version';
"encoding"                  return 'encoding';

"+"                         return 'plus';
"-"                         return 'minus';
"*"                         return 'times';
"/"                         return 'div';
"%"                         return 'mod';

"<="                        return 'lte';
">="                        return 'gte';
"<"                         return 'lt';
">"                         return 'gt';
"="                         return 'asig';
"=="                        return 'equal';
"!="                        return 'nequal';

"&&"                        return 'and';
"||"                        return 'or';
"!"                         return 'not';
"?"                         return 'interC';

";"                         return 'semicolon';
","                         return 'coma';
"."                         return 'period';
// "'"                         return 'apost';

"("                         return 'lparen';
")"                         return 'rparen';
"{"                         return 'lcurly';
"}"                         return 'rcurly';
"["                         return 'lbracket';
"]"                         return 'rbracket';

/* Number literals */
(([0-9]+"."[0-9]*)|("."[0-9]+))     return 'DoubleLiteral';
[0-9]+                              return 'IntegerLiteral';

/* Identifier literals */
[a-zA-Z_áÁéÉíÍóÓ][a-zA-Z0-9_ñÑ]*            return 'identifier';

{stringliteral}                     return 'StringLiteral';
{charliteral}                       return 'CharLiteral';

//error lexico
.                                   {
                                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF'

/lex

//SECCION DE IMPORTS
%{
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");
    const {SalidaGramatica} = require("../AST/SalidaGramatica");
    
    var reportBNF = [];
    var reportBNF2 = [];

%}

// DEFINIMOS PRESEDENCIA DE OPERADORES
%left 'or'
%left 'and'
%left 'lt' 'lte' 'gt' 'gte' 'equal' 'nequal'
%left 'plus' 'minus'
%left 'times' 'div' 'mod'
%left 'pow'
%left 'not'
%left UMINUS

%left 'lparen' 'rparen'


// DEFINIMOS PRODUCCIÓN INICIAL
%start START

%%


/* Definición de la gramática */
START : 
        ENCODING RAICES EOF         {   
                                        reportBNF.push('&lt;START&gt; ::= &lt;RAICES&gt; EOF');
                                        reportBNF2.push('Start.val = Raiz.val. // Fin del documento');
                                        $$ = $2;
                                        return new SalidaGramatica($$, reportBNF, reportBNF2,$1);
                                    }
    ;

ENCODING: 
        lt interC xml version asig StringLiteral encoding asig StringLiteral interC gt      {   $$ = $9; }
    |   error gt                                                                            {}
    ;

RAICES: 
        RAICES RAIZ         {   
                                reportBNF.push('&lt;RAICES&gt; ::= &lt;RAICES&gt; &lt;RAIZ&gt;');
                                reportBNF2.push('Raices.val = Raices.push(Raiz)');
                                $1.push($2);
                                $$ = $1;
                            }
	|   RAIZ                { 
                                reportBNF.push('&lt;RAICES&gt; ::= &lt;RAIZ&gt;');
                                reportBNF2.push('Raices.val = Raiz.val');
                                $$ = [$1];
                            } ;

RAIZ: 
        OBJETO              { 
                                reportBNF.push('&lt;RAIZ&gt; ::= &lt;OBJETO&gt;');
                                reportBNF2.push('Raiz.val = Objeto.val');
                                $$ = $1;
                            }
    ;

OBJETO:
        lt identifier LATRIBUTOS gt OBJETOS lt div identifier gt                { 
                                                                                    reportBNF.push('&lt;OBJETO&gt; ::= lt identifier &lt;LATRIBUTOS&gt; gt &lt;OBJETOS&gt; lt div identifier gt');
                                                                                    reportBNF2.push('Objeto = new Objeto(id,\'\',linea, columna, atributos, objetos)');
                                                                                    $$ = new Objeto($2,'',@1.first_line, @1.first_column,$3,$5,1,$8);
                                                                                }
    |   lt identifier LATRIBUTOS gt LISTA_ID_OBJETO lt div identifier gt        { 
                                                                                    reportBNF.push('&lt;OBJETO&gt; ::= lt identifier &lt;LATRIBUTOS&gt; gt &lt;LISTA_ID_OBJETO&gt; lt div identifier gt');
                                                                                    reportBNF2.push('Objeto = new Objeto(id,texto,linea, columna,atributos,[])');
                                                                                    $$ = new Objeto($2,$5,@1.first_line, @1.first_column,$3,[],1,$8);
                                                                                }
    |   lt identifier LATRIBUTOS div gt                                         { 
                                                                                    reportBNF.push('&lt;OBJETO&gt; ::= lt identifier &lt;LATRIBUTOS&gt; div gt');
                                                                                    reportBNF2.push('Objeto = new Objeto(id,\'\',linea, columna,atributos,[])');
                                                                                    $$ = new Objeto($2,'',@1.first_line, @1.first_column,$3,[],0,'');
                                                                                }
    |   error gt                                                                {

                                                                                }
    ;

LATRIBUTOS: 
        ATRIBUTOS                               { 
                                                    reportBNF.push('&lt;LATRIBUTOS&gt; ::= &lt;ATRIBUTOS&gt;');
                                                    reportBNF2.push('Lista_Atributos.val = Atributos.val');
                                                    $$ = $1;
                                                }
    |   /* vacio */                             { 
                                                    reportBNF.push('&lt;LATRIBUTOS&gt; ::= /*vacio*/');
                                                    reportBNF2.push('Lista_Atributos.val = [] ');
                                                    $$ = [];
                                                }
    ;

ATRIBUTOS:
        ATRIBUTOS ATRIBUTO                      {   
                                                    reportBNF.push('&lt;ATRIBUTOS&gt; ::= &lt;ATRIBUTOS&gt; &lt;ATRIBUTO&gt;');
                                                    reportBNF2.push('Atributos.val = Atributos.push(Atributo)');
                                                    $1.push($2);
                                                    $$ = $1;/*revisar*/
                                                }
    |   ATRIBUTO                                { 
                                                    reportBNF.push('&lt;ATRIBUTOS&gt; ::= &lt;ATRIBUTO&gt;');
                                                    reportBNF2.push('Atributos.val = Atributo.val');
                                                    $$ = [$1];
                                                } 
    ;

ATRIBUTO: 
        identifier asig StringLiteral           {   
                                                    reportBNF.push('&lt;ATRIBUTO&gt; ::= identifier asig StringLiteral');
                                                    reportBNF2.push('Atributo = new Atributo(id, valor, fila, columna)');
                                                    $$ = new Atributo($1, $3, @1.first_line, @1.first_column);
                                                }
    |   error gt                                {}
    |   error lt                                {}
    ;

OBJETOS:
        OBJETOS OBJETO      {   reportBNF.push('&lt;OBJETOS&gt; ::= &lt;OBJETOS&gt; &lt;OBJETO&gt;');
                                reportBNF2.push('Objetos.val = Objetos.push(Objeto)');
                                $1.push($2);
                                $$ = $1;
                            }
	|   OBJETO              { 
                                reportBNF.push('&lt;OBJETOS&gt; ::= &lt;OBJETO&gt;');
                                reportBNF2.push('Objetos.val = Objeto.val');
                                $$ = [$1];
                            } 
    ;

LISTA_ID_OBJETO: 
        LISTA_ID_OBJETO LISTA_VALORES               { 
                                                        reportBNF.push('&lt;LISTA_ID_OBJETO&gt; ::= &lt;LISTA_ID_OBJETO&gt; &lt;LISTA_VALORES&gt;');
                                                        reportBNF2.push('Lista_Id_Objeto.val = Lista_Id_Objeto.val + \' \' + Lista_Id_Objeto.val');
                                                        $$ = $1 + ' ' + $2;
                                                    }
    |   LISTA_VALORES                               {   
                                                        reportBNF.push('&lt;LISTA_ID_OBJETO&gt; ::= &lt;LISTA_VALORES&gt;');
                                                        reportBNF2.push('Lista_Id_Objeto.val = Lista_valores.val');
                                                        $$ = $1;
                                                    }
    ;

LISTA_VALORES : 
        IntegerLiteral          {
                                    $$ = $1;
                                }
    |   DoubleLiteral           {
                                    $$ = $1;
                                }
    |   identifier              {
                                    $$ = $1;
                                }
    |   StringLiteral           {
                                    $$ = $1;
                                }
    |   CharLiteral             {
                                    $$ = $1;
                                }
    |   xml                     {
                                    $$ = $1;
                                }
    |   CARACTERES              {
                                    $$ = $1;
                                }
    |   error                   {}                                
    ;

CARACTERES :
        plus        { $$ = $1;}
    |   minus       { $$ = $1;}
    |   times       { $$ = $1;}
    |   div         { $$ = $1;}
    |   mod         { $$ = $1;}
    |   asig        { $$ = $1;}
    |   equal       { $$ = $1;}
    |   nequal      { $$ = $1;}
    |   and         { $$ = $1;}
    |   or          { $$ = $1;}
    |   not         { $$ = $1;}
    |   semicolon   { $$ = $1;}
    |   lparen      { $$ = $1;}
    |   rparen      { $$ = $1;}
    |   lcurly      { $$ = $1;}
    |   rcurly      { $$ = $1;}
    |   lbracket    { $$ = $1;}
    |   rbracket    { $$ = $1;}
    |   period      { $$ = $1;}
    |   coma        { $$ = $1;}
    |   lesst       { $$ = '<';}
    |   greatert    { $$ = '>';}
    |   ampersand   { $$ = '&';}
    |   apostro     { $$ = '\'';}
    |   quotation   { $$ = '"';}
    ;
