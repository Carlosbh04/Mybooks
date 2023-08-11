import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/service/books.service';
import { UserService } from 'src/app/service/user-service.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Books[] = [];

  constructor(public booksService: BooksService, public userService: UserService){
    this.booksService.getAll(this.userService.user.Id_user).subscribe((data:Response)=>{
      this.books = data.data;
    })
  }

  deleteBook(id_book:number):void{
    this.booksService.delete(id_book).subscribe((data:Response)=>{
      if (data.error == false) {
        this.booksService.getAll(this.userService.user.Id_user).subscribe((data:Response)=>{
          this.books = data.data;
        })
      }
    })
  }

  searchBook(id_book: string): void {
    if (id_book !== '') {
      for (let i = 0; i < this.books.length; i++) {
        if (Number(id_book) === this.books[i].Id_book) {
          this.booksService.getOne(this.userService.user.Id_user, Number(id_book)).subscribe((data: Response) => {
            this.books = data.data;
          });
        } else {
          let searchBookArray: Books[] = [];
          for (const book of this.books) {
            if (book.Id_book.toString().indexOf(id_book) !== -1) {
              searchBookArray.push(book);
            }
          }
          this.books = searchBookArray;
        }
      }
    } else {
      this.booksService.getAll(this.userService.user.Id_user).subscribe((data: Response) => {
        this.books = data.data;
      });
    }
  }
  
}