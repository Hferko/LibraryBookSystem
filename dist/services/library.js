import konyvtar from "../data.js";
export default class Library {
    books = new Map();
    constructor() {
        // Library feltöltése könyvekkel
        konyvtar.map(item => {
            this.addBook(item);
        });
    }
    get allBooks() {
        return this.books;
    }
    addBook(book) {
        book.available = true;
        this.books.set(book.bookId, book);
    }
    removeBook(bookId) {
        this.books.delete(bookId);
    }
    findBookById(bookId) {
        let wantedBook = this.books.get(bookId);
        if (wantedBook) {
            return wantedBook;
        }
        else {
            return "Nem található ilyen könyv a könyvtárban";
        }
    }
    listAllBooks() {
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
