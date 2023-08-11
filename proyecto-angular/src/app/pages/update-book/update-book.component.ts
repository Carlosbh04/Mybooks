import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/service/books.service'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user-service.service'; 
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Books[];
  constructor(public booksService: BooksService, public router: Router, public userService: UserService){
    this.booksService.getAll(this.userService.user.Id_user).subscribe((data:Response)=>{
      this.books = data.data;
    })
  }

  public id_book:number;
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';

  update(updateBookForm: NgForm){
    let bookToUpdated = new Books(this.id_book,this.userService.user.Id_user,this.title,this.type,this.author,this.price,this.photo);
    this.booksService.edit(bookToUpdated).subscribe((data:Response)=>{
      this.books = data.data;
      this.router.navigateByUrl('/books');
    })
  }
}