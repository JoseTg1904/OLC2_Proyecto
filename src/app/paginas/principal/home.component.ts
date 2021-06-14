import { Component } from '@angular/core';

import * as analizador from '../../../analizadores/xpathAsc';
import * as XMLasc from '../../../analizadorXML/index';

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
  querys: any = "Ingrese una query";
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
  xmlEntrada: any = `<bookstore>
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

ngOnInit(){
  console.log(analizador.parse("hola"));
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
    localStorage.clear();
    let ascXML = new XMLasc.AnalizadorASCXML();
    let ret = ascXML.ejecutarCodigo(this.xmlEntrada);
    localStorage.setItem('tablaXML', JSON.stringify(ret.tablaRep));
    localStorage.setItem('CSTxml', ret.cstRep);
    //this._servicio.llenarTablaXML(ret.tablaRep);
    //console.log(retorno);
  }

  reporteTablaSimbolosXML() {
    window.open("tablaSimbolosXML", "_blank")
  }
}
