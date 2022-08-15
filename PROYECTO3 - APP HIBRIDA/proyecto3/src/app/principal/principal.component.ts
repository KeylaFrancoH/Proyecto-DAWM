import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

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

