import { Component,OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  implements OnInit {
 

    books: Books[] = [
    new Books(1, 1, 'The Catcher in the Rye', 'Novel', 'J.D. Salinger', 9.99, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/440px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg'),
    new Books(2, 2, 'To Kill a Mockingbird', 'Novel', 'Harper Lee', 8.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ztAGoBV5fTRNq0lK3VmiXB-yH1mQAW0l7PYM3VSQ1aS7V_Pc'),
    new Books(3, 3, '1984', 'Dystopian fiction', 'George Orwell', 7.99, 'https://m.media-amazon.com/images/I/81StSOpmkjL.jpg')
    
  ];
isEven(even:number){ 
  return even % 2=== 0;

}
constructor(){};
ngOnInit() {
  
};


newBook: Books = new Books();
bookCount:number = this.books.length;

addBook(){
  this.newBook.id_book = this.books.length + 1;
  this.books.push(this.newBook);
  this.bookCount = this.books.length;
  this.newBook = new Books();
};

removeBook(book: any) {
  const index = this.books.indexOf(book);
  if (index >= 0) {
    this.books.splice(index, 1);
  }
}


}






