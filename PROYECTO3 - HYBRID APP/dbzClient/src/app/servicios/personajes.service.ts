import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  obtenerPersonajes() {
    return this.http.get('http://localhost:3000/personajes')
    }
}
