import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaXMLComponent } from './paginas/tabla-xml/tabla-xml.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/principal/home.component';
import { GraficoComponent } from './paginas/grafico/grafico.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'tablaSimbolosXML', component: TablaXMLComponent },
  { path: 'grafico', component: GraficoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
