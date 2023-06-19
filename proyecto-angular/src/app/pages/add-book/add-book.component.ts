import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  newBook: Books = new Books();

  constructor(private router: Router, private booksService: BooksService) {}

  addBook() {
    this.booksService.addBook(this.newBook).subscribe({
      next: () => {
        console.log('Libro agregado correctamente');
        this.router.navigate(['/books']);
      },
      error: (error) => {
        console.log('Error al agregar el libro:', error);
      }
    });
  }

  ngOnInit(): void {}
}
