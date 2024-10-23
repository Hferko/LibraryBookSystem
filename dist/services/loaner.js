var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Library from "./library.js";
import { LogMethod } from "../utils/decorators.js";
export default class Loaner {
    library;
    allBooks;
    availableBooks;
    constructor() {
        this.library = new Library();
        this.allBooks = this.library.allBooks;
        this.availableBooks = this.library.allBooks;
    }
    get lonableBooks() {
        return this.availableBooks;
    }
    borrowBook(bookId) {
        let searchedBook = this.library.findBookById(bookId);
        if (typeof searchedBook !== "string") {
            searchedBook.available = false;
            this.availableBooks.delete(bookId);
            return searchedBook;
        }
        else {
            return "Ez a könyv nem kölcsönözhető";
        }
        console.log(searchedBook);
    }
}
__decorate([
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], Loaner.prototype, "borrowBook", null);
