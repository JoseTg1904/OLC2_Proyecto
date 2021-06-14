import { Atributo } from './../Expresiones/Atributo';
import { Objeto } from './../Expresiones/Objeto';

export class CST {

    cuerpoDot: string = '';
    public objetos: any;

    constructor(objetos: any) {
        this.objetos = objetos;
    }

    generarArbolCST(objetos: any): string {
        var num;
        this.cuerpoDot = 'digraph D { \n ';
        objetos.forEach((object: any) => {
            num = `${object.linea.toString()}_${object.columna.toString()}`;
            this.cuerpoDot += this.generarNodoObjeto(object, num, null);
            num = num + 1000;
        });
        this.cuerpoDot += '} \n ';
        this.generateDot(this.cuerpoDot);
        return this.cuerpoDot;
    }

    generarNodoObjeto(objeto: any, pos: any, padre: any): string {
        var nodo = `nodo${pos} [label = 
        \"ETIQUETA
${objeto.identificador}\" ]\n`;
        /*var nodo = `nodo${pos} [shape=plaintext ` +
            `label=<` +
            `<table border="0" cellborder="1" cellspacing="0">` +
            `<tr><td bgcolor="red">ETIQUETA</td></tr>` +
            `<tr><td bgcolor="lightblue">${objeto.identificador}</td></tr>` +
            `</table>> ]\n`;
*/
        if (padre !== null) {
            nodo += `nodo${padre} -> nodo${pos}\n`;
        }
        if (objeto.texto !== '') {
            nodo += `nodo${pos}_t [label =\"${objeto.texto}\" ]\n`;
            nodo += `nodo${pos} -> nodo${pos}_t [label=\"txt\"]\n`;
        }

        objeto.listaAtributos.forEach((atribute: any) => {
            var num = `${atribute.linea.toString()}_${atribute.columna.toString()}`;
            nodo += this.generarNodoAtributo(atribute, num, pos);
        });
        objeto.listaObjetos.forEach((obj: any) => {
            var num = `${obj.linea.toString()}_${obj.columna.toString()}`;
            nodo += this.generarNodoObjeto(obj, num, pos);
        });

        return nodo;
    }

    generarNodoAtributo(objeto: any, pos: any, padre: any): string {
        var nodo = `nodo${pos} [label =
        \"ATRIBUTO
${objeto.identificador}\"]\n`//+
       /* var nodo = `nodo${pos} [shape=plaintext ` +
            `label=<` +
            `<table border="0" cellborder="1" cellspacing="0">` +
            `<tr><td bgcolor="yellow">ATRIBUTO</td></tr>` +
            `<tr><td bgcolor="lightblue">${objeto.identificador}</td></tr>` +
            `</table>> ]\n`;*/
        nodo += `nodo${padre} -> nodo${pos}\n`;
        nodo += `nodo${pos}_a [label=${objeto.valor}]\n`;
        nodo += `nodo${pos} -> nodo${pos}_a [label=\"valor\"]\n`;
        return nodo;
    }

    generateDot(cuerpo: any) {
        console.log('Cuerpo', cuerpo);
    }

}
