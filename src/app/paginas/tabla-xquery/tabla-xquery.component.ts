import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-xquery',
  templateUrl: './tabla-xquery.component.html',
  styleUrls: ['./tabla-xquery.component.css']
})
export class TablaXqueryComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'tipo', 'valor', 'fila', 'columna'];
  simbolos: any;

constructor() {this.simbolos = localStorage.getItem('tablaXQUERY'); }

  ngOnInit(): void {
    this.simbolos = JSON.parse(this.simbolos);
    console.log(this.simbolos, "vacia?")
  }

}
