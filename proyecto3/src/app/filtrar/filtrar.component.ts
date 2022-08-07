import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {
  tipo_plato = [
    {valor:'TODOS'},
    {valor:'PLATO FUERTE'},
    {valor:'SOPAS'},
    {valor:'ENSALADAS'},
    {valor:'DESAYUNO'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
