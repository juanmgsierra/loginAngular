import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBdxumaSsLfNCAbMwZaadL2tRqERTW2nk4'; 
  // crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdxumaSsLfNCAbMwZaadL2tRqERTW2nk4
  constructor( private http: HttpClient) { 

  }

  logout(){

  }

  login( usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apiKey }`,
      authData
    )
  }
  

  nuevoUsuario( usuario: UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${ this.url }signUp?key=${ this.apiKey }`,
      authData
    )
  }

}
