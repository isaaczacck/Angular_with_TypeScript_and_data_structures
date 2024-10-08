import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  book: string [] = ["book-1", 'book-2', 'book-3'];
  newBook: string = '';

  addBook(){
    if (this.newBook.trim()){
      this.book.push(this.newBook);
      this.newBook = '';    // clear input book after adding 
    }
  }

  deleteBook(book: string){
    this.book = this.book.filter(b => b != book); // remove or delete book list
  }

}
