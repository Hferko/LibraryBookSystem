import Ibook from "../models/Ibook.js";
import konyvtar from "../data.js";
import { Category, ClassicalLit, Scientific, Fiction } from "../models/category.js";

export default class Library{
  private books: Map<number, Ibook> = new Map();  

  constructor(){
    // Library feltöltése könyvekkel
    konyvtar.map(item => {
      this.addBook(item);      
    });
  }
  
  public get allBooks() : Map<number, Ibook> {
    return this.books;
  }  

  addBook(book: Ibook): void {
    book.available = true;
    this.books.set(book.bookId, book);
  }

  removeBook(bookId: number) {
    this.books.delete(bookId);    
  }  

  findBookById(bookId: number): Ibook | string { 
    let wantedBook: Ibook | undefined = this.books.get(bookId); 
   
    if (wantedBook) {
      return wantedBook;
    } 
    else {
      return "Nem található ilyen könyv a könyvtárban";
    }
  }

  listAllBooks(): void {    
    if (this.books.size > 0) {
      this.books.forEach((value, key) => {       
        console.log(key, value);
      });
    } 
    else {
     console.log("A könyvtár üres");
    }
  }
}