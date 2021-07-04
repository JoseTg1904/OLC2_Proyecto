import {Nodo} from "../Arbol/Nodo";
import {Table} from "../Simbolos/Table";
import {Tree} from "../Simbolos/Tree";
import {Tipo} from "../Varios/Tipo";
import {tipos} from "../Varios/Tipo";
import { NodoAST } from "../Arbol/NodoAST";

export class Print extends Nodo{
    expresion : Nodo;

    constructor(expresion: Nodo, line: Number, column: Number){
        super(new Tipo(tipos.VOID), line, column);
        this.expresion = expresion;
    }

    execute(table: Table, tree: Tree): any {
        const valor = this.expresion.execute(table, tree);
        tree.consola.push(valor);
        return null;
    }

    getNodo() {
        var nodo:NodoAST  = new NodoAST("PRINT");
        nodo.agregarHijo("print");
        nodo.agregarHijo("(");
        nodo.agregarHijo(this.expresion.getNodo());
        nodo.agregarHijo(")");
        return nodo;
    }
}