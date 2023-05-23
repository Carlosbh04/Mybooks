import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

 
  books: Books[] = [
  new Books(1,1, 'The Catcher in the Rye', 'Novel', 'J.D. Salinger', 9.99, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/440px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg'),
  new Books(2,2, 'To Kill a Mockingbird', 'Novel', 'Harper Lee', 8.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ztAGoBV5fTRNq0lK3VmiXB-yH1mQAW0l7PYM3VSQ1aS7V_Pc'),
  new Books(3,3, '1984', 'Dystopian fiction', 'George Orwell', 7.99, 'https://m.media-amazon.com/images/I/81StSOpmkjL.jpg'),

  ];

  addBook(newBook: Books) {
    this.books.push(newBook);
  }

  getBooks(){

    return this.books;
  };
  private bookToUpdate :Books;

  constructor(){ }
 
  setBookToUpdate(book: Books){
  this.bookToUpdate = book;

  }
  

  removeBook(book: Books) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
  


  getBookToUpdate(){
    return this.bookToUpdate;
  }
   
  getBookById(identifier: string | number): Books | undefined {
    if (typeof identifier === 'number') {
      return this.books.find(book => book.id_book === identifier);
    } else if (typeof identifier === 'string') {
      return this.books.find(book => book.ref === identifier);
    }
    return undefined;
  }
  
  
  
  // getOne(ref: number): Books | undefined {
  //   for (const book of this.books) {
  //     if (book.id_book === ref) {
  //       return book;
        
  //     }
  //   }
  //   return undefined;
  // }
  

  getAll():Books[]{
return this.books;
  }


  edit(book: Books): boolean {
    let edited = false;
    const titleBookForEdit = book.title.toLowerCase();
  
    for (let i = 0; i < this.books.length; i++) {
      if (titleBookForEdit === this.books[i].title.toLowerCase()) {
        if (book.type !== '') {
          this.books[i].type = book.type;
          edited = true;
        }
        if (book.author !== '') {
          this.books[i].author = book.author;
          edited = true;
        }
        if (!isNaN(book.price)) {
          this.books[i].price = book.price;
          edited = true;
        }
        if (book.photo !== '') {
          this.books[i].photo = book.photo;
          edited = true;
        }
        if (!isNaN(book.id_book)) {
          this.books[i].id_book = book.id_book;
          edited = true;
        }
      }
    }
  
    return edited;
  }
  
}