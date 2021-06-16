interface ayudaGrafico {
    valor: string
    padre: string
}

export class Arbol {

    dot: string = "";
    objetos: any = [];

    constructor(objetos: any) {
        this.objetos = objetos
        this.dot = "";
    }

    crearGrafoAST(): string {
        this.dot = "digraph AST {\n";
        this.dot += "\"raiz\" [label = \"Raiz\"]\n";
        this.dot += `\"raiz\" -> \"${this.objetos[0].linea.toString()}_${this.objetos[0].columna.toString()}I\"\n`;
        this.dot += `\"raiz\" -> \"${this.objetos[0].linea.toString()}_${this.objetos[0].columna.toString()}D\"\n`;
        this.dot += `\"${this.objetos[0].linea.toString()}_${this.objetos[0].columna.toString()}I\" [label = \"${this.objetos[0].estado}\"]\n`;
        this.dot += `\"${this.objetos[0].linea.toString()}_${this.objetos[0].columna.toString()}D\" [label = \"${this.objetos[0].identificador}\"]\n`;
        
        var padre = `${this.objetos[0].linea.toString()}_${this.objetos[0].columna.toString()}I`
        for (let i = 1; i < this.objetos.length; i++){
            var retorno = this.generarNodoAST(this.objetos[i], padre);
            this.dot += retorno.valor
            padre = retorno.padre;
        }
        this.dot += "}";
        return this.dot;
    }

    generarNodoAST(objeto: any, padre: any): ayudaGrafico {
        var aux:string = "";
        var izqID = `${objeto.linea.toString()}_${objeto.columna.toString()}I`;
        var derID = `${objeto.linea.toString()}_${objeto.columna.toString()}D`;
        
        aux = `\"${izqID}\" [label = \"${objeto.estado}\"]\n`;
        aux += `\"${derID}\" [label = \"${objeto.identificador}\"]\n`;

        aux += `\"${padre}\" -> \"${izqID}\"\n`;
        aux += `\"${padre}\" -> \"${derID}\"\n`;
        return {valor: aux, padre: izqID}
    }

    crearGrafoCST():string {
        this.dot = "digraph AST {\n";
        this.dot += "\"raiz\" [label = \"Raiz\"]\n";
        var padre = 'raiz'
        for (let i = 0; i < this.objetos.length; i++){
            var retorno = this.generarNodoCST(this.objetos[i], padre);
            this.dot += retorno.valor
            padre = retorno.padre;
        }
        this.dot += "}";
        return this.dot;
    }

    generarNodoCST(objeto: any, padre: string):ayudaGrafico {
        var aux:string = "";
        var izqID = `${objeto.linea.toString()}_${objeto.columna.toString()}I`;
        var derID = `${objeto.linea.toString()}_${objeto.columna.toString()}D`;
        var centroID = `${objeto.linea.toString()}_${objeto.columna.toString()}C`;

        aux = `\"${izqID}\" [label = \"${objeto.estado}\"]\n`;
        aux += `\"${derID}\" [label = \"${objeto.identificador}\"]\n`;
        aux += `\"${centroID}\" [label = \"Nodo\"]\n`;

        aux += `\"${centroID}\" -> \"${izqID}\"\n`;
        aux += `\"${centroID}\" -> \"${derID}\"\n`;
        aux += `\"${padre}\" -> \"${centroID}\"\n`;
        return {valor: aux, padre: izqID}
    }
}