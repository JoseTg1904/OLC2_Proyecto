import { Component } from '@angular/core';

import * as XMLasc from '../../../analizadorXML/index';
import * as XMLdesc from '../../../analizadorXML/indexDesc';
import * as XPATHasc from '../../../analizadores/index';
import * as XPATHdesc from '../../../analizadores/indexDesc';
import * as XQUERYasc from '../../../analizadorXQUERY/index';
import { ReporteService } from '../../reporte.service';

import { Router } from '@angular/router';
import { xpathBusqueda } from '../../../analizadorXML/Instrucciones/Busqueda/xpathBusqueda';

declare const Buffer

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  constructor(public _servicio: ReporteService, private _router: Router) { }

  title = 'interfaz';

  //editor query
  querys: any = "/bookstore/book";
  editorQueryOptions: any = {
    theme: 'gruvbox-dark',
    mode: "application/xquery",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  }

  //editor XML entrada
  xmlEntrada: any = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book>
    <title lang="en">Harry Potter</title>
    <price>29.99</price>
  </book>
  <book1>
    <title lang="en">Learning XML</title>
    <price>39.95</price>
  </book1>
</bookstore>`;
  editorXMLEntradaOptions: any = {
    theme: 'gruvbox-dark',
    mode: "application/xml",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  }

  //editor XML Salida
  xmlSalida: any = "XML Salida";
  editorXMLSalidaOptions: any = {
    theme: 'gruvbox-dark',
    mode: "application/xml",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  }

  salida3D: string = "Salida del codigo de tres direcciones";
  editor3DSalidaOptions: any = {
    theme: 'gruvbox-dark',
    mode: "text/x-csrc",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  //reportes
  tablaXML: any[] = [];
  cstXML: string = "";
  bnfXML: any[] = [];
  encodingXML: any = "";
  erroresXML: any[] = [];
  erroresXPATH: any[] = [];

  queryMod: string = "";

  bnfXpath: any[] = [];
  astXpath:string = "";
  cstXpath: string = "";

  //reportesVisualizacion
  grafo:boolean = false;
  bnf: boolean = false;
  tabla: boolean = false;
  error: boolean = false;

  //tabla de simbolos
  simbolos:any;

  ngOnInit(){
    localStorage.clear();
    let ascXquery = new XQUERYasc.AnalizadorXquery();
    ascXquery.ejecutarCodigo("");
  }

  abrirXML(files: FileList) {
    this.xmlEntrada = files.item(0);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.xmlEntrada = fileReader.result;
      console.log(fileReader.result);
    }
    fileReader.readAsText(this.xmlEntrada);
  }

  ejecutarAscendente(){
    this.botarReportes();
    localStorage.clear();
    
    let ascXML = new XMLasc.AnalizadorASCXML();
    let ascXpath = new XPATHasc.AnalizadosAscXpath();
    let ret = ascXML.ejecutarCodigo(this.xmlEntrada);
    let ret1 = ascXpath.ejecutarCodigo(this.querys);

    this.simbolos = ret.objetos;
    this.tablaXML = ret.tablaRep;
    this.cstXML = ret.cstRep;
    this.bnfXML = ret.bnfRep;
    this.encodingXML = ret.encoding;
    this.erroresXML = ret.errores;
    this.queryMod = ret1.ejecutado;
    this.bnfXpath = ret1.bnfRep;
    this.astXpath = ret1.astRep;
    this.cstXpath = ret1.cstRep;
    this.erroresXPATH = ret1.errores;

    this.obtenerConsulta(this.queryMod, this.simbolos);

    alert("Analisis concluido");
  }

  obtenerConsulta(query: string, tabla: any){
    var buscador: xpathBusqueda = new xpathBusqueda();

    var texto: string = ""
    if(query.includes("|")) {
      var multiple = buscador.getNodesByFilters("3", query, tabla);
      this.xmlSalida = ""
      for (let i = 0; i < multiple.length; i++){
        texto += multiple[i]
        texto += "\n"
      }
    }else if(query[0] !== "/" && query[0] !== "//"){
      texto = buscador.getNodesByFilters("1", query, tabla)
    }else{
      texto = buscador.getNodesByFilters("2", query, tabla)
    }

    var buf = Buffer.from(texto);
    this.xmlSalida = buf.toString(this.encoding()); 
  }

  ejecutarDescendente() {
    this.botarReportes();
    localStorage.clear();

    let descXML = new XMLdesc.AnalizadorASCXML();
    let descXPATH = new XPATHdesc.AnalizadosAscXpath();
    let ret = descXML.ejecutarCodigo(this.xmlEntrada);
    let ret1 = descXPATH.ejecutarCodigo(this.querys);

    this.simbolos = ret.objetos;
    this.tablaXML = ret.tablaRep;
    this.cstXML = ret.cstRep;
    this.bnfXML = ret.bnfRep;
    this.erroresXML = ret.errores;
    this.queryMod = ret1.ejecutado;
    this.bnfXpath = ret1.bnfRep;
    this.astXpath = ret1.astRep;
    this.cstXpath = ret1.cstRep;
    this.erroresXPATH = ret1.errores;
    this.encodingXML = ret.encoding;

    this.obtenerConsulta(this.queryMod, this.simbolos);

    alert("Analisis concluido");
  }

  botarReportes() {
    this.grafo = this.bnf = this.tabla = this.error = false;
  }

  reporteTablaSimbolosXML() {
    this.botarReportes();
    localStorage.clear();
    localStorage.setItem('tablaXML', JSON.stringify(this.tablaXML));
    this.tabla = true;
    //window.open("tablaSimbolosXML", "_blank")
  }

  reporteCSTXML() {
    this.botarReportes();
    localStorage.clear();
    localStorage.setItem('grafo', this.cstXML);
    this.grafo = true;
    //window.open("grafico", "_blank")
  }

  reporteBNFXML() {
    this.botarReportes();
    localStorage.clear();
    localStorage.setItem('bnf', JSON.stringify(this.bnfXML));
    this.bnf = true;
    //window.open("bnf", "_blank")
  }

  reporteBNFXPATH() {
    this.botarReportes();
    localStorage.clear();
    localStorage.setItem('bnf', JSON.stringify(this.bnfXpath));
    this.bnf = true;
    //window.open("bnf", "_blank")
  }

  reporteASTXPATH() {
    this.botarReportes();
    localStorage.clear()
    localStorage.setItem('grafo', this.astXpath);
    this.grafo = true
    //window.open("grafico", "_blank")
  }

  reporteCSTXPATH() {
    this.botarReportes();
    localStorage.clear()
    localStorage.setItem('grafo', this.cstXpath);
    this.grafo= true;
    // window.open("grafico", "_blank")
  }

  reporteErroresXML() {
    this.botarReportes();
    localStorage.clear()
    localStorage.setItem('errores', JSON.stringify(this.erroresXML));
    this.error = true;
  }

  reporteErroresXPATH() {
    this.botarReportes();
    localStorage.clear()
    localStorage.setItem('errores', JSON.stringify(this.erroresXPATH));
    this.error = true;
  }

  encoding(): string {
    this.encodingXML = this.encodingXML.toLowerCase();
    if (this.encodingXML.includes("utf8")){
      return "utf8"
    }else if(this.encodingXML.includes("ascii")){
      return "ascii"
    }else if(this.encodingXML.includes("utf16")){
      return "utf16"
    }else if(this.encodingXML.includes("ucs")){
      return "ucs2"
    }else if(this.encodingXML.includes("base")){
      return "base64"
    }else if(this.encodingXML.includes("binary")){
      return "binary"
    }else if(this.encodingXML.includes("hex")){
      return "hex"
    }
    return "utf8"
  }

}
