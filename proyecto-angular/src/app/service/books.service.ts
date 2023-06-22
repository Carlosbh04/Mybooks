import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:3000/book';
  private bookToUpdate: Books;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl);
  }

  addBook(book: Books): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  deleteBook(bookId: string): Observable<boolean> {
    const url = `${this.apiUrl}`;
    const options = {
      body: { id_book: bookId }
    };
    return this.http.delete<boolean>(url, options);
  }
  

  getBookById(id: number): Observable<Books> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Books>(url);
  }

  updateBook(book: Books): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, book);
  }

  searchBooks(searchTerm: string): Observable<Books[]> {
    const url = `${this.apiUrl}?search=${searchTerm}`;
    return this.http.get<Books[]>(url);
  }

  setBookToUpdate(book: Books) {
    this.bookToUpdate = book;
  }

  getBookToUpdate(): Books {
    return this.bookToUpdate;
  }

  searchBookById(id: number): Observable<Books> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Books>(url);
  }
}
