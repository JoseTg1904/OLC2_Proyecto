import { Component } from '@angular/core';

import * as analizador from '../analizadores/xpathAsc';
import * as XMLasc from '../analizadorXML/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  xmlEntrada: any = "XML Entrada";
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
    console.log("si?")
    let ascXML = new XMLasc.AnalizadorASCXML();
    let retorno = ascXML.ejecutarCodigo(this.xmlEntrada);
    console.log(retorno);
  }
}
