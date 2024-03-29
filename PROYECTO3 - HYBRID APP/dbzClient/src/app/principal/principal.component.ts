import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../servicios/personajes.service';
import { Personajes } from '../interfaz/personajes';
import { character } from '../interfaz/personajes';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  data: any = []
  datos= {}


  dataSource: string[] = [];
  
  
  constructor(private personajeService: PersonajesService) { 

  }

  
  ngOnInit(): void {
      this.personajeService.obtenerPersonajes().subscribe(respuesta => {
      this.dataSource = respuesta as string[]
        for (let index = 0; index < this.dataSource.length; index++) {
          if (this.data.includes(this.dataSource[index][<any>"raza"])) {
     
          } else {
            this.data.push(this.dataSource[index][<any>"raza"])
          }
        
        }
      
    })

    
   
  }
  
  send(value: any) {
    this.personajeService.emit<string>(value);
  }

}
