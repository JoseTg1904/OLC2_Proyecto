import { AST } from './AST/AST';
import { CST } from './AST/CST';
import { Entorno } from './AST/Entorno';
import { GramaticaBNF } from './AST/GramaticaBNF';
import { TablaSimbolos } from './AST/TablaSimbolos';
import { SalidaGramatica } from './AST/SalidaGramatica';

import * as gramatica from './Gramatica/gramatica';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { emitWarning } from 'process';

interface retorno {
    tablaRep: any,
    bnfRep: any,
    cstRep: any
}

export class AnalizadorASCXML  {

    public ejecutarCodigo(entrada: string): retorno {
        const tabla: TablaSimbolos = new TablaSimbolos();
        const salidaG = gramatica.parse(entrada);
        const arbolCST = new CST(salidaG.objetos);

        // TABLA SIMBOLOS
        let reporteTabla = tabla.generarReporteTablaObjetos(salidaG.objetos); 
        // BNF
        let gramBnf = new GramaticaBNF(salidaG.reporteBNF, salidaG.reporteBNF2);
        let reporteBNF = gramBnf.getBNFReport();
        //console.log('--------', gramBnf.getBNFReport() );
        // DOT CST
        let reporteCST = arbolCST.generarArbolCST(salidaG.objetos); 

        let ret: retorno = {
            tablaRep: reporteTabla,
            bnfRep: reporteBNF,
            cstRep: reporteCST
        };

        return ret;
    }

/*ejecutarCodigo(`    
<bookstore>
    <book>
        <title lang="en">Harry Potter</title>
        <price>29.99</price>
    </book>

    <book1>
        <title lang="en">Learning XML</title>
        <price>39.95</price>
    </book1>
</bookstore>

<bookstore>
    <book>
        <title lang="en">El principito</title>
        <price>9.99</price>
    </book>

    <book1>
        <title lang="en">Pinocho</title>
        <price>9.95</price>
    </book1>
</bookstore>
`);*/
}