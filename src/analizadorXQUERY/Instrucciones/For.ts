import { Nodo } from "../Arbol/Nodo";
import { Table } from "../Simbolos/Table";
import { Tree } from "../Simbolos/Tree";
import { Error } from "../Varios/Error";
import { NodoAST } from "../Arbol/NodoAST";

export class For extends Nodo {
    

    constructor(){
        super(null,0,0);
    }

    execute(){

    }

    getNodo(){
        return null;
    }
}