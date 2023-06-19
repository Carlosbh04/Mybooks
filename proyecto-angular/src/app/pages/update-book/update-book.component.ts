import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/service/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public book: Books;

  constructor(private booksService: BooksService, private router: Router) {
    const bookToUpdate = this.booksService.getBookToUpdate();
    if (bookToUpdate && bookToUpdate.id_book !== undefined && bookToUpdate.id_book !== 0) {
      this.book = bookToUpdate;
    } else {
      this.book = new Books();
    }
  }

  update(title: string, author: string, type: string, price: number, photo: string, id_book: number) {
    const updatedBook: Books = {
      id_book: id_book,
      title: title,
      author: author,
      type: type,
      price: price,
      photo: photo,
      id_user: 0,
    };

    this.booksService.updateBook(updatedBook).subscribe({
      next: (response) => {
        if (response.success) {
          console.log(response.message);
          this.router.navigate(['/books']); // Redirigir a la página de libros después de la actualización exitosa
        } else {
          console.log(response.message);
          // Aquí puedes manejar el caso en que el libro no existe
        }
      },
      error: (error) => {
        console.log(error);
        // Aquí puedes manejar cualquier error en la solicitud
      }
    });
  }
}
