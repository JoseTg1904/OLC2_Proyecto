export class tError {

    tipo: any;
    texto: string;
    linea: number;
    columna: number;

    constructor(tipo: any, texto: string, linea: number, columna: number) {
        this.columna = columna;
        this.linea = linea;
        this.texto = texto;
        this.tipo = tipo;
    }
}