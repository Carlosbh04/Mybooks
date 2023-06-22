import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import { Books } from 'src/app/models/books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Books[] = [];
  filteredBooks: Books[] = [];
  searchTerm: string;

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getBooks().subscribe({
      next: (response) => {
        this.books = response;
        this.filteredBooks = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addBook(newBook: Books) {
    this.booksService.addBook(newBook).subscribe({
      next: () => {
        console.log('Libro agregado correctamente');
        this.books.push(newBook);
        this.filteredBooks.push(newBook);
        this.router.navigate(['/books']); // Redirigir a la página de libros
      },
      error: (error) => {
        console.log('Error al agregar el libro:', error);
      }
    });
  }

  removeBook(book: Books) {
    this.booksService.deleteBook(book.id_book.toString()).subscribe({
      next: (response) => {
        if (response) {
          const index = this.books.findIndex((b) => b.id_book === book.id_book);
          if (index !== -1) {
            this.books.splice(index, 1);
            this.filteredBooks = this.books.slice();
            this.showAllBooks(); // Mostrar todos los libros después de eliminar el ID
          }
          console.log('Libro eliminado correctamente');
        } else {
          console.log('No se pudo eliminar el libro');
        }
      },
      error: (error) => {
        console.log('Error al eliminar el libro:', error);
      }
    });
  }
  
  searchBooksById() {
    if (this.searchTerm) {
      const id = Number(this.searchTerm);
      this.booksService.getBookById(id).subscribe({
        next: (book) => {
          console.log('Libro encontrado:', book);
          this.filteredBooks = [book];
        },
        error: (error) => {
          console.log('Error al buscar el libro por ID:', error);
        }
      });
    } else {
      this.showAllBooks(); // Si no hay término de búsqueda, mostrar todos los libros
    }
  }
  

  showAllBooks() {
    this.filteredBooks = this.books;
  }

  searchBooks() {
    if (this.searchTerm) {
      this.booksService.searchBooks(this.searchTerm).subscribe({
        next: (books) => {
          this.filteredBooks = books;
        },
        error: (error) => {
          console.error('Error al buscar libros:', error);
        }
      });
    } else {
      this.showAllBooks(); // Si no hay término de búsqueda, mostrar todos los libros
    }
  }
}
