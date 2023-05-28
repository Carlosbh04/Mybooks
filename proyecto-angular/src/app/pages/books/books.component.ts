<<<<<<< HEAD
import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
=======
import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/service/books.service';
import { Pipe } from '@angular/core';



>>>>>>> dia5

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
<<<<<<< HEAD
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Books[] = [
    new Books(1, 1, 'The Catcher in the Rye', 'Novel', 'J.D. Salinger', 9.99, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/440px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg'),
    new Books(2, 2, 'To Kill a Mockingbird', 'Novel', 'Harper Lee', 8.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ztAGoBV5fTRNq0lK3VmiXB-yH1mQAW0l7PYM3VSQ1aS7V_Pc'),
    new Books(3, 3, '1984', 'Dystopian fiction', 'George Orwell', 7.99, 'https://m.media-amazon.com/images/I/81StSOpmkjL.jpg')

  ];
isEven(even:number){
  return even % 2 === 0;
}


book: Books[] = [
 
];

newBook: Books = new Books();
bookCount:number = this.books.length;

addBook() {
  this.newBook.id_book = this.books.length + 1;
  this.books.push(this.newBook);
  this.bookCount = this.books.length;
  this.newBook = new Books();
}
}
=======
  styleUrls: ['./books.component.css'],
  providers: [Pipe],
})
export class BooksComponent implements OnInit {
  @Output() search: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('search_id_book') searchIdBook: ElementRef;
  

  
  // Search = faSearch;
  isIconMoved : boolean = false;


  books: Books[] = [];
  filteredBooks: Books[];
  searchTerm: string = '';

  isEven(even: number) {
    return even % 2 === 0;
  }

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.filteredBooks = this.books;
  }

  newBook: Books = new Books();

  onBookAdded(newBook: Books) {}

  searchBooks() {
    const searchTerm = this.searchIdBook.nativeElement.value;
    if (searchTerm) {
      this.filteredBooks = this.books.filter(
        (book) =>
          book.id_book.toString().includes(searchTerm) ||
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredBooks = this.books;
    }
  }
  

  removeBook(book: Books) {
    this.booksService.removeBook(book);
    if (this.filteredBooks && this.filteredBooks.includes(book)) {
      this.filteredBooks = this.filteredBooks.filter((b: Books) => b !== book);
    }
  }
  moveSearchIcon(){this.isIconMoved = true;}
   
  }
  


  



>>>>>>> dia5
