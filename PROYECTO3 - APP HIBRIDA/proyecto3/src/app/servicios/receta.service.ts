import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private recetasService: RecetaService, private http: HttpClient){ }
}
