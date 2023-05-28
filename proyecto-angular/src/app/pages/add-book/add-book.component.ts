import { Component, Input, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service'; 


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Books
  i! : number;

 newBook: Books = new Books();

 constructor(private router : Router, private booksService: BooksService){}

   addBook(){
  this.booksService.addBook(this.newBook);
  this.router.navigate(['/books']);
   };

   ngOnInit(): void {}
 
}
