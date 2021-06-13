import { AST } from './AST/AST';
import { CST } from './AST/CST';
import { Entorno } from './AST/Entorno';
import { GramaticaBNF } from './AST/GramaticaBNF';
import { TablaSimbolos } from './AST/TablaSimbolos';

const gramatica = require('./Gramatica/gramatica');

function ejecutarCodigo(entrada: string) {
    const tabla: TablaSimbolos = new TablaSimbolos();
    const salidaG = gramatica.parse(entrada);
    const arbolCST = new CST(salidaG.objetos);

    // TABLA SIMBOLOS
    //tabla.generarReporteTablaObjetos(salidaG.objetos); 
    // BNF
    //const gramBnf = new GramaticaBNF(salidaG.reporteBNF, salidaG.reporteBNF2);
    //console.log('--------', gramBnf.getBNFReport() );
    // DOT CST
    arbolCST.generarArbolCST(salidaG.objetos); 

}

ejecutarCodigo(`    
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
`);