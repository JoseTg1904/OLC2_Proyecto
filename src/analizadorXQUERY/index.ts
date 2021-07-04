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
import { Logico } from './Expresiones/Logico';
import { Table } from './Simbolos/Table';
import { NodoAST } from './Arbol/NodoAST';
import { Nodo } from './Arbol/Nodo';
import { Print } from './Instrucciones/Print';

import * as gramatica from './GramaticaXquery';

interface retorno {
    errores: any,
    consola: any
}

export class AnalizadorXquery {

    public ejecutarCodigo(entrada: string) {
        //entrada = `local:minPrice($/bookstore/book/price,$/bookstore/book/year)`
        //let arbol: Tree = gramatica.parse(entrada)

        let ret: retorno =  {
            errores: [], 
            consola: []
        };

        try {
            const tree = gramatica.parse(entrada);
            const tabla = new Table(null);
        
            tree.instrucciones.map((m: any) => {
                try {
                    const res = m.execute(tabla, tree);
                } catch (error) {
                const error2 = new Error('Sintactico', `Irrecuperable`, 0, 0);
                    tree.consola.push(error2.toString());
                    console.log(error)
                }
            });
        
            var init: NodoAST = new NodoAST("RAIZ");
            var instr: NodoAST = new NodoAST("INSTRUCCIONES");
            tree.instrucciones.map((m: Nodo) => {
                instr.agregarHijo(m.getNodo());
            });
            init.agregarHijo(instr);
        
            //graphAST(init);
            //graphTabla(tree.Variables);
        
            console.log(tree)
            ret.consola = tree.consola;
            ret.errores = tree.errores;
        } catch (error) {
            console.log(error)
            let consola2 = new Array<String>();
            consola2.push(error);
            consola2.push("Ocurrio un Error sintactico Irrecuperable\n\n");
            consola2.push("                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFF\n" +
                "                   FFFFFF\n" +
                "                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFFF\n" +
                "                   FFFFFFF\n" +
                "                   FFFFFFF\n" +
                "                   FFFFFFF");
            
            ret.consola = consola2;
            ret.errores = [];
        }
        return ret
    }
}