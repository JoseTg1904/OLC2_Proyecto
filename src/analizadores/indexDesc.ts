import { SalidaGramatica } from './AST/SalidaGramatica';
import { Nodo } from './Expresiones/Nodo';
import { GramaticaBNF } from './AST/GramaticaBNF';
import { Arbol } from './AST/Arbol';
import Primitivo from './Expresiones/Primitivo';
import Aritmetica from './Operaciones/Aritmeticas';
import Relacional from './Operaciones/Relacional';
import Logica from './Operaciones/Logica';

import * as gramatica from './xpathDesc';

interface retorno {
    objetos: Nodo[],
    bnfRep: any,
    astRep: any,
    cstRep: any,
    ejecutado: any
}

export class AnalizadosAscXpath {
    public ejecutarCodigo(entrada: string): retorno {

        const salidaG = gramatica.parse(entrada);
        const gramBnf = new GramaticaBNF(salidaG.reporteBNF, salidaG.reporteBNF2);
        const arbol = new Arbol(salidaG.objetos);

        console.log(salidaG.objetos)

        let reporteBNF = gramBnf.getBNFReport();
        let reporteAST = arbol.crearGrafoAST();
        let reporteCST = arbol.crearGrafoCST();
        let resultado = arbol.ejecutarArbol();

        return {
            objetos: salidaG.objetos,
            bnfRep: reporteBNF,
            astRep: reporteAST,
            cstRep: reporteCST,
            ejecutado: resultado
        };
    }
}