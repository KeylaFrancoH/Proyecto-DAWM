import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../servicios/personajes.service';
import { Personajes } from '../interfaz/personajes';
import { Transformaciones } from '../interfaz/data';

@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.component.html',
  styleUrls: ['./info-personaje.component.css']
})
export class InfoPersonajeComponent implements OnInit {
  public id = ""
  transformation: any = []
  data: any = []
  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.personajeService.on<string>().subscribe(
      data => {
        this.id = data; 
      }
    )
    this.personajeService.obtenerPersonajePorId(this.id).subscribe(respuesta => {
      this.data = respuesta as Personajes
      console.log(this.data)
    })

    this.personajeService.obtenerTransformacionesPorID(this.id).subscribe(respuesta => {
      this.transformation = respuesta as Transformaciones
    })
  }

}
