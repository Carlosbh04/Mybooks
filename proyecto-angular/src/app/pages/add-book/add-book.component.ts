import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/service/books.service'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user-service.service'; 
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public books: Books[];
  userId: string;
  constructor(public booksService: BooksService, public router: Router, public userService: UserService){
    if (this.userService.user) {
      this.booksService.getAll(this.userService.user.Id_user).subscribe((data:Response)=>{
        this.books = data.data;
      });
    }
  }

  public Id_book:number;
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  

  addBook(addBookForm: NgForm){
    if (this.userService.user) {
      let newBook = new Books(this.Id_book, this.userService.user.Id_user, this.title, this.type, this.author, this.price, this.photo);
      this.booksService.add(newBook).subscribe((data: Response) => {
        this.books = data.data;
        this.router.navigateByUrl('/books');
      });
    }
  }
}