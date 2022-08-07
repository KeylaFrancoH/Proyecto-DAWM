import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardComponent } from './onboard/onboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    InicioComponent,
    PrincipalComponent,
    FiltrarComponent,
    VisualizarComponent
  ],
  imports: [
    MatGridListModule,
    MatIconModule,  
    MatButtonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
