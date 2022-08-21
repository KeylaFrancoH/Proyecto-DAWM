import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../servicios/personajes.service';
import {MatTableDataSource} from '@angular/material/table';
import { COMMA, TAB, SPACE, ENTER } from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips'
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  
  displayedColumns: string[] = ['imagen', 'nombre','genero' ,'raza'];

  dataSource = [];
  
  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.personajeService.obtenerPersonajes().subscribe(respuesta => {
      this.dataSource = respuesta as any

    })
   
  }
 
}
