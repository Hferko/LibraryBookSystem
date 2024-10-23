import Ibook from "../models/Ibook.js";
import Library from "./library.js";
import { LogMethod } from "../utils/decorators.js";

export default class Loaner<T> {
  library: Library;
  allBooks:  Map<number, Ibook>;
  availableBooks: Map<number, Ibook>;  

  constructor() {   
    this.library = new Library();
    this.allBooks = this.library.allBooks;
    this.availableBooks = this.library.allBooks;    
  }
  
  public get lonableBooks() : Map<number, Ibook> {
    return this.availableBooks;
  }  

  @LogMethod
  borrowBook(bookId: number): Ibook | string{    
    let searchedBook: Ibook | string = this.library.findBookById(bookId);    
    if (typeof searchedBook !== "string") {
      searchedBook.available = false;
      this.availableBooks.delete(bookId);     
      return searchedBook; 
    }  
    else{
      return "Ez a könyv nem kölcsönözhető";
    }  
  }
}
