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

import * as gramatica from './GramaticaXquery';

export class AnalizadorXquery {

    public ejecutarCodigo(entrada: string) {
        entrada = `local:minPrice($/bookstore/book/price,$/bookstore/book/year)`
        console.log(gramatica.parse(entrada));

        console.log("aaalv")
    }

}