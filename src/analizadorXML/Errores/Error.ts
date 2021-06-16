
export class Error {

    public tipo: any;
    public texto: any;
    public linea: any;
    public columna: any;

    constructor(tipo: any, txt: any, linea: any, columna: any) {
        this.tipo = tipo;
        this.texto = txt;
        this.linea = linea;
        this.columna = columna;
    }


}
