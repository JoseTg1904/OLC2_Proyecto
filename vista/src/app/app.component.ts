import { Component } from '@angular/core';

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

  obj: any;

ngOnInit(){
  this.obj= JSON.stringify({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Object",
    "additionalProperties": false,
    "properties": {
      "string": {
        "type": "string",
        "title": "String"
      }
    }
  }, null, ' ');
}

setEditorContent() {
  // console.log(event, typeof event);
  console.log(this.obj);
}
}
