import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { InformacionComponent } from './informacion/informacion.component';
import { InfoPersonajeComponent } from './info-personaje/info-personaje.component';
import { SelectComponent } from './select/select.component';
const routes: Routes = [
  { path: "onboard", component: OnboardComponent },
  { path: "login", component: LoginComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "principal/:id", component: PrincipalComponent },
  { path: "informacion", component: InformacionComponent },
  { path: "info-personaje", component: InfoPersonajeComponent },
  { path: "select", component: SelectComponent },
  { path: "**", redirectTo: "onboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
