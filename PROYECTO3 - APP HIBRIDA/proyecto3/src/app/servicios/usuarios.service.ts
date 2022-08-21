import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private usuariosService: UsuariosService, private http: HttpClient) { }
}
