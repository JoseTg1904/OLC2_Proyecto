import { SalidaGramatica } from './AST/SalidaGramatica';
import { Nodo } from './Expresiones/Nodo';
import Primitivo from './Expresiones/Primitivo';
import Aritmetica from './Operaciones/Aritmeticas';
import Relacional from './Operaciones/Relacional';
import Logica from './Operaciones/Logica';

import * as gramatica from './xpathAsc';

interface retorno {
    objetos: Nodo[],
    bnf1: string[],
    bnf2: string[]
}

export class AnalizadosAscXpath {
    
    public ejecutarCodigo(entrada: string): retorno {

        const salidaG = gramatica.parse(entrada);

        let a: retorno = {
            objetos: salidaG.objetos,
            bnf1: salidaG.reporteBNF,
            bnf2: salidaG.reporteBNF2
        }

        return a;
    }
}