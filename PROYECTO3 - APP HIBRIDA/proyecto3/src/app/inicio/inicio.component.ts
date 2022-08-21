import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  email:string ="";
  password: string="";

  constructor() { }

  ngOnInit(): void {
    console.log(this.email);
    console.log(this.password);
  }

}

