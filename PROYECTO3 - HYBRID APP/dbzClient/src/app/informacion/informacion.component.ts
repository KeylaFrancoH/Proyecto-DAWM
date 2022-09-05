import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../servicios/personajes.service';
import { Personajes } from '../interfaz/personajes';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  public raza = "";
  public nombre = "";
  data: any = []

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {

    
    this.personajeService.on<string>().subscribe(
      datos => {
        this.raza = datos
        this.personajeService.obtenerPersonajePorRaza(datos).subscribe(respuesta => {

          this.data = respuesta as Personajes
         
        })
    
      })

      console.log(this.raza)
  }



  send(value: any) {
    this.personajeService.emit<string>(value);
  }

}
