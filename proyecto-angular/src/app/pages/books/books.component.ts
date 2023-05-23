import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/service/books.service';
import { Pipe } from '@angular/core';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
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
  


  



