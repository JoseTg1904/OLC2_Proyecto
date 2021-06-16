import { Predicate } from "./Predicate";

export class Nodo{

    estado: string;
    identificador:any;
    predicado: Predicate;
    linea: number;
    columna: number;

    constructor(estado:string, identificador:any, predicado: Predicate, linea:number, columna:number) {
        this.estado = estado;
        this.identificador = identificador;
        this.predicado = predicado;
        this.linea = linea;
        this.columna = columna;
    }
}