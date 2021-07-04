import { NodoX } from './Expresiones/NodoX';
import { EjecucionXpath } from './Arbol/Ejecucion';
import { If } from './Instrucciones/If';
import { Retorno } from './Instrucciones/Retorno';
import { Aritmetica } from './Expresiones/Aritmetica';
import { Relacional } from './Expresiones/Relacional';
import { Tree } from './Simbolos/Tree';
import { Tipo, tipos, esEntero } from './Varios/Tipo';
import { Primitivo } from './Expresiones/Primitivo';
import { Error } from './Varios/Error';
import { Identificador } from './Expresiones/identificador';
import { Declaracion } from './Instrucciones/Declaracion';
import { DeclaracionMetodo } from './Instrucciones/DeclaracionMetodo';
import { LlamadaMetodo } from './Instrucciones/LlamadaMetodo';
import { ToLower } from './Expresiones/ToLower';
import { ToUpper } from './Expresiones/uppercase';
import { ToString } from './Expresiones/ToString';

import { ToNumber } from './Expresiones/ToNumber';
import { Substrings } from './Expresiones/Substring';
import * as gramatica from './GramaticaXquery';

export class AnalizadorXquery {

    public ejecutarCodigo(entrada: string) {
        entrada = `declare function local:ackerman($p as xs:integer,$d as xs:integer)
        as xs:integer {
        
        
         if  ($m = 0) then $n+1  
          else if ($m gt 0 and $n=0) then local:ackerman($m -1 , 1 )
          else local:ackerman($m -1 , local:ackerman($m, $n -1))
           
        
        
         } ; `
        console.log(gramatica.parse(entrada));



        console.log("aaalv")
    }

}