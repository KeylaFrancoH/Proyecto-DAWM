import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataService:any=[]
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private usuariosService: UsuarioService) { }

    username: string="";
    password: string="";

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe(respuesta => {
      this.dataService = respuesta as any

    })
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["principal"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }




