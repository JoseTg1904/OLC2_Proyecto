import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interfaz';

  //editor query
  querys = "Ingrese una query";
  editorQueryOptions: any = {
    theme: 'oceanic-next',
    lineNumbers: true,
    mode: 'xquery',
    lint: true
  }

  codeMirrorOptions: any = {
  theme: 'oceanic-next',
  mode: 'application/ld+json',
  lineNumbers: true,
  lineWrapping: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
  autoCloseBrackets: true,
  matchBrackets: true,
  lint: true
  };

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
