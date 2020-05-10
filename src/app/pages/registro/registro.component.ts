import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;
  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  formSubmit( form: NgForm){
    if( form.invalid ){ return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe( resp =>{
      console.log(resp);
      Swal.close();

      this.router.navigateByUrl('/home');
      if(this.recordarme){
        localStorage.setItem('email', this.usuario.email);
      }

    }, (err)=>{
      console.log(err.error.error.message);

      Swal.fire({
        icon: 'error',
        text: err.error.error.message
      });

    });
  }

}
