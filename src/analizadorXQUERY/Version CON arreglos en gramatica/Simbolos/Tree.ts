import { Nodo } from "../Arbol/Nodo";
import { Error } from "../Varios/Error";
import { Simbolo } from "./Simbolo";

export class Tree {
    instrucciones: Array<Nodo>
    errores: Array<Error>
    consola: Array<String>
    Variables: Array<Simbolo>;

    constructor(instrucciones: Array<Nodo>) {
        this.instrucciones = instrucciones;
        this.errores = new Array<Error>();
        this.consola = new Array<String>();
        this.Variables = new Array<Simbolo>();
    }
}