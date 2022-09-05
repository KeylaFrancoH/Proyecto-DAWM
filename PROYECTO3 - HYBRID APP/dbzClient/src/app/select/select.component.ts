import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';
import { dataMision } from '../interfaz/data';
import { DatosNoSql } from '../interfaz/data';
import { PersonajesService } from '../servicios/personajes.service';
import { elementAt } from 'rxjs';
import { Personajes } from '../interfaz/personajes';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  disableSelect = new FormControl(false)

  selector: string = "";
  data: any = []
  campos: any = []
  id_personajes: any = []
  set: any = new Set();
  SelectedValue: any;


  constructor(private dataService: DataService, private personajeService: PersonajesService) {

  }
  select(e: any) {
    this.SelectedValue = e.target.value
    this.campos = []
    this.llenarTabla(this.SelectedValue)

  }

  ngOnInit(): void {
    this.dataService.obtenerInfo().subscribe(respuesta => {
      this.id_personajes = respuesta as any

      for (let index = 0; index < this.id_personajes.length; index++) {
        this.set.add(this.id_personajes[index]["id"])

      }
    })




  }
  llenarTabla(id: any) {
    for (let index = 0; index < this.id_personajes.length; index++) {
      if (id === this.id_personajes[index].id) {
        this.campos.push(this.id_personajes[index])
      }

    }
  }

}
