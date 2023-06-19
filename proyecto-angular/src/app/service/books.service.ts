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

  deleteBook(bookId: string): Observable<void> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.delete<void>(url);
  }

  getBookById(id: number): Observable<Books> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Books>(url);
  }

  updateBook(book: Books): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${book.id_book}`, book);
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
