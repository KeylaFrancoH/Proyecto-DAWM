import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public _subject = new BehaviorSubject<any>("")
  emit<T>(data: T) {
    this._subject.next(data)
  }
  on<T>(): Observable<T> {
    return this._subject.asObservable();
  }

  constructor(private http: HttpClient) { }

  obtenerPersonajes() {
    return this.http.get('http://localhost:3000/personajes')
  }

  obtenerPersonajePorId(id: string) {
    return this.http.get('http://localhost:3000/personajes/' + id.toString())
  }

  obtenerPersonajePorRaza(raza: string) {
    return this.http.get(`http://localhost:3000/personajes/razas/${raza}`)
   
  }

  obtenerTransformacionesPorID(id:string){
    return this.http.get(`http://localhost:3000/transformaciones/personaje/${id}`)
  }
  
}
