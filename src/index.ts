import Ibook from "./models/Ibook.js";
import Library from "./services/library.js";
import Users from "./services/users.js";
import { ClassicalLit } from "./models/category.js";
const classicalLitHun = new ClassicalLit("Klasszikus irodalom", "Magyar");

// Új könyv létrehozása
let book1:Ibook = {
  bookId: 9,
  title: "Úri muri",
  author: "Móricz Zsigmond",
  category: classicalLitHun
}

// Library példányosítása
const library = new Library();
// Új könyv hozzáadása a Libraryhoz
library.addBook(book1);
library.findBookById(5);
// Listázza a konzolra a könyveket
//library.listAllBooks();

let users = new Users();
users.userId = 11;
users.name = "Glázser Bozsó";
users.email = "yyy@www.qq";

// Hozzáadom új felhasználót a listához
// userLista a setter, userList a getter
users.userLista = users.userList; 
console.log(users.userList);
users.borrowing(11, 8);
library.listAllBooks();