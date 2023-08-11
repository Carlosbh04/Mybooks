import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:3000/api/books";
  constructor(private http: HttpClient){}

  // Métodos del servicio
  //-- Método para obtener todos los libros.
  getAll(Id_user:number):Observable<Object>{
    return this.http.get(this.url + '?Id_user=' + Id_user);
  }

  //-- Método para obtener un solo libro --> buscador.
  getOne(Id_user:number,Id_book:number):Observable<Object>{
    return this.http.get(this.url + '?Id_user=' + Id_user + '&Id_book=' + Id_book);
  }

  //-- Método para añadir un libro --> Funcionalidad de la pg Add Book.
  add(book:Books):Observable<Object>{
    return this.http.post(this.url,book);
  }

  //-- Método para editar un libro --> Funcionalidad de la pg Update Book.
  edit(book:Books):Observable<Object>{
    return this.http.put(this.url,book);
  }

  //-- Método para borrar un libro --> Funcionalidad del botón 'X' de las cards de cada libro.
  delete(Id_book:number):Observable<Object>{
    return this.http.request('delete', this.url, {body:{Id_book:Id_book}});
  }
}