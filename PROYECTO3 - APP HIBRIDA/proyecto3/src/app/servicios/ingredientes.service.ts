import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  constructor(private ingredientesService: IngredientesService, private http: HttpClient)  { }
}
