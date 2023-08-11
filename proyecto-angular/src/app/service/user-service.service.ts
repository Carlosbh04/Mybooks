import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://localhost:3000/api";
  public logueado:boolean;
  public user:User;

  constructor(private http: HttpClient) {
      this.logueado = false;
  }

  //-- Método para registrar un nuevo usuario
  registerUser(user:User):Observable<Object>{
    return this.http.post(this.url + "/register",user);
  }

  //-- Método para loguear un usuario
  loginUser(user: User): Observable<Object> {
    return this.http.post(this.url + "/login", user)
      .pipe(
        catchError(error => {
          console.log('Login Error:', error); // Manejar errores en la consola
          throw error; // Lanzar el error nuevamente para que el componente lo maneje
        })
      );
  }
  // Método para cerrar sesión
  logout(): void {
    this.logueado = false;
    this.user = null;
    // Realiza cualquier otra limpieza necesaria
  }
}