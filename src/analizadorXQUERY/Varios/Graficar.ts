import { NodoAST } from "../Arbol/NodoAST";
import { NodoCST } from "../Arbol/NodoCST";
import { Simbolo } from "../Simbolos/Simbolo";

export function graphAST(raiz: NodoAST): String {
    getDot(raiz)
    return grafo
}

export function graphCST(raiz: NodoCST): String {
    getDotCST(raiz)
    return grafo
}

var c: number;
var grafo: String;

function getDotCST(raiz: NodoCST): String {
    grafo = "digraph cst {\n";
    grafo += "n0 [label = \"" + raiz.getValor() + "\"]\n"; //.replace("\"", "\\\"") + "\"];\n";
    c = 1;
    recorrerCST("n0", raiz);
    grafo += "}";
    return grafo;
}

function recorrerCST(padre: String, nPadre: NodoCST): void {
    nPadre.getHijos().forEach(hijo => {
        var nombreHijo: String = "n" + c;
        let val = hijo.getValor()
        val = val.replace(/\'/gi, "")
        val = val.replace(/\"/gi, "")
        grafo += nombreHijo + " [label = \"";
        grafo = grafo + "" + val
        grafo += "\"]\n";
        grafo += padre + " -> " + nombreHijo + "\n";
        c++;
        recorrerCST(nombreHijo, hijo);
    });
}

function getDot(raiz: NodoAST): String {
    grafo = "digraph ast {\n";
    grafo += "n0 [label = \"" + raiz.getValor() + "\"]\n";
    c = 1;
    recorrerAST("n0", raiz);
    grafo += "}";
    return grafo;
}

function recorrerAST(padre: String, nPadre: NodoAST): void {
    nPadre.getHijos().forEach(hijo => {
        var nombreHijo: String = "n" + c;
        let val = hijo.getValor()
        val = val.replace(/\'/gi, "")
        val = val.replace(/\"/gi, "")
        grafo += nombreHijo + " [label = \"" + val + "\"]\n";
        grafo += padre + " -> " + nombreHijo + "\n";
        c++;
        recorrerAST(nombreHijo, hijo);
    });
}
/*
export function graphTabla(tabla: Array<Simbolo>): void {
    var fs = require('fs');

    var stream = fs.createWriteStream(`./src/Reportes/TablaSimbolos.html`);
    let documento = "";
    stream.once('open', function () {
        stream.write(escribirHtml(tabla, documento));
        stream.end();
    });

}

function escribirHtml(tabla: Array<Simbolo>, documento: String): String {
    documento += "<!DOCTYPE html>\n<html>\n<head>\n"
    documento += "   <meta charset='UTF-8'>\n"
    documento += "   <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'>\n"
    documento += "</head>\n"
    documento += "<body class='container grey lighten-1'>\n"
    documento += "<h2>Tabla de Simbolos</h2>\n"
    documento += "   <table class='highlight'>\n"
    documento += "       <thead>\n"
    documento += "           <tr>\n"
    documento += "               <th>Identificador</th>\n"
    documento += "               <th>Tipo</th>\n"
    documento += "               <th>Tipo</th>\n"
    documento += "               <th>linea</th>\n"
    documento += "               <th>Columna</th>\n"
    documento += "           </tr>\n"
    documento += "       </thead>\n"
    documento += "       <tbody>\n"
    var num = 1;
    for (let i = 0; i<tabla.length ; i++) {
            var variable: Simbolo = tabla[i];
            documento += "           <tr>\n"
            documento += `                <th><strong>${variable.id.split("$", 1)[0]}</strong></th>\n`
            documento += `                <th><strong>${variable.tipo}</strong></th>\n`
            documento += `                <th><strong>${variable.tipo2}</strong></th>\n`
            documento += `                <th><strong>${variable.line}</strong></th>\n`
            documento += `                <th><strong>${variable.column}</strong></th>\n`
            documento += "           </tr>\n"
            num += 1
    }

    documento += "       </tbody>\n"
    documento += "   </table>\n"
    documento += "</body>\n</html>\n"
    return documento;
}*/