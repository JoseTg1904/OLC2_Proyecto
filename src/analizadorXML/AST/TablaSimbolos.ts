
export class TablaSimbolos {

    cuerpoHtml: string = '';

    constructor() { }

    generarReporteTablaObjetos(objetos: any) {
        this.cuerpoHtml = `<TABLE BORDER> \n`;
        this.cuerpoHtml += `    <thead> \n`;
        this.cuerpoHtml += `        <tr> \n`;
        this.cuerpoHtml += `        <th>No.</th> \n`;
        this.cuerpoHtml += `        <th>Nombre</th> \n`;
        this.cuerpoHtml += `        <th>Tipo</th> \n`;
        this.cuerpoHtml += `        <th>Valor</th> \n`;
        this.cuerpoHtml += `        <th>Fila</th> \n`;
        this.cuerpoHtml += `        <th>Columna</th> \n`;
        this.cuerpoHtml += `        <th>Ambito</th> \n`;
        this.cuerpoHtml += `        </tr> \n`;
        this.cuerpoHtml += `    </thead> \n`;
        this.cuerpoHtml += `    <tbody> \n`;

        objetos.forEach((object: any) => {
            this.cuerpoHtml += this.generarFilaObjeto(object, null, 1, 'ETIQUETA');
        });

        this.cuerpoHtml += `    </tbody> \n`;
        this.cuerpoHtml += `</TABLE> \n`;
        //console.log(this.cuerpoHtml);
        return this.cuerpoHtml;
    }

    generarFilaObjeto(objeto: any, ambito: any, posicion: any, tipo: any): string {
        var fila = `  <tr> \n`;
        fila += `      <td class="text-left">${posicion}</td>\n`;
        fila += `      <td class="text-left">${objeto.identificador}</td>\n`;
        fila += `      <td class="text-left">${tipo}</td>\n`;

        if (objeto.texto === '') {
            fila += `      <th class="text-left"> Etiqueta Raiz </th>\n`;
        } else {
            fila += `      <td class="text-left">${objeto.texto}</td>\n`;
        }
        fila += `        <th>${objeto.linea}</th> \n`;
        fila += `        <th>${objeto.columna}</th> \n`;

        if (ambito === null) {
            fila += `      <th class="text-left">GLOBAL</th>\n`;
        } else {
            fila += `      <td class="text-left">${ambito}</td>\n`;
        }
        fila += `  </tr> \n`;

        objeto.listaAtributos.forEach((atribute: any) => {
            fila += this.generarFilaAtributo(atribute, objeto.identificador, posicion + 1, 'ATRIBUTO');
        });
        objeto.listaObjetos.forEach((atribute: any) => {
            fila += this.generarFilaObjeto(atribute, objeto.identificador, posicion + 1, 'ETIQUETA');
        });
        return fila;
    }

    generarFilaAtributo(objeto: any, ambito: any, posicion: any, tipo: any): string {
        var fila = `  <tr> \n`;
        fila += `      <td class="text-left">${posicion}</td>\n`;
        fila += `      <td class="text-left">${objeto.identificador}</td>\n`;
        fila += `      <td class="text-left">${tipo}</td>\n`;
        fila += `      <td>${objeto.valor}</td>\n`;
        fila += `      <td>${objeto.linea}</td> \n`;
        fila += `      <td>${objeto.columna}</td> \n`;
        fila += `      <td class="text-left">${ambito}</td>\n`;
        fila += `  </tr> \n`;
        return fila;
    }


}
