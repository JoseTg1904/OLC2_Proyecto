import { Component } from '@angular/core';

import * as XMLasc from '../../../analizadorXML/index';
import * as XMLdesc from '../../../analizadorXML/indexDesc';
import * as XPATHasc from '../../../analizadores/index';
import * as XPATHdesc from '../../../analizadores/indexDesc';
import { ReporteService } from '../../reporte.service';
import { Router } from '@angular/router';


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

  //reportes
  tablaXML: any[] = [];
  cstXML: string = "";
  bnfXML: any[] = [];
  encodingXML: any = "";

  queryMod: string = "";

  bnfXpath: any[] = [];
  astXpath:string = "";
  cstXpath: string = "";

  //reportesVisualizacion
  grafo:boolean = false;
  bnf: boolean = false;
  tabla: boolean = false;

  ngOnInit(){
    localStorage.clear();
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

    this.tablaXML = ret.tablaRep;
    this.cstXML = ret.cstRep;
    this.bnfXML = ret.bnfRep;
    this.encodingXML = ret.encoding;
    this.queryMod = ret1.ejecutado;
    this.bnfXpath = ret1.bnfRep;
    this.astXpath = ret1.astRep;
    this.cstXpath = ret1.cstRep;
    alert("Analisis concluido");
  }

  ejecutarDescendente() {
    this.botarReportes();
    localStorage.clear();
    let descXML = new XMLdesc.AnalizadorASCXML();
    let descXPATH = new XPATHdesc.AnalizadosAscXpath();
    let ret = descXML.ejecutarCodigo(this.xmlEntrada);
    let ret1 = descXPATH.ejecutarCodigo(this.querys);

    this.tablaXML = ret.tablaRep;
    this.cstXML = ret.cstRep;
    this.bnfXML = ret.bnfRep;
    this.queryMod = ret1.ejecutado;
    this.bnfXpath = ret1.bnfRep;
    this.astXpath = ret1.astRep;
    this.cstXpath = ret1.cstRep;
    alert("Analisis concluido");
  }

  botarReportes() {
    this.grafo = this.bnf = this.tabla = false;
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

}
