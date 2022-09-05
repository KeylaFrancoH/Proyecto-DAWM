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
  //displayedColumns: string[] = ['imagen', 'nombre','genero' ,'raza'];

  dataSource: string[] = [];
  
   //arrPersonajes: Array<Personajes>= [];
  
  constructor(private personajeService: PersonajesService) { 
   /* this.personajeService.obtenerPersonajes().subscribe(respuesta => {
      let personajesResponse  = respuesta as character;
      
      this.arrPersonajes= personajesResponse.personaje
      console.log(personajesResponse.personaje)
    })*/
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
