import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  { path: "onboard", component: OnboardComponent },
  { path: "inicio", component: InicioComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "filtrar", component: FiltrarComponent },
  { path: "visualizar", component: VisualizarComponent },
  { path: "**", redirectTo: "onboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
