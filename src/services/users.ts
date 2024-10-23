import IBorrower from "../models/Iborrower.js";
import { clients } from "../utils/httpRequest.js";
import Loaner from "./loaner.js";

export default class Users {
  private users: IBorrower[] = [];
  public _id: number;
  private _name: string;
  private _email: string;

  constructor() {
    this._id = this.userId;
    this._name = this.name;
    this._email = this.email;

    clients.map((client) => {
      this.users.push({
        id: client.id,
        name: client.name,
        email: client.email,
      });      
    });
  }

  public get userList(): IBorrower[] {
    return this.users;
  }

  public set userLista(userList: IBorrower[]) {
    if (this._id && this._name && this._email) {
      this.users.push({id: this._id, name:this.name, email:this.email});
    }
    else{
      console.log("Helytelen adatokat kaptam !");
    }    
  }  
  
  public set userId(id : number) {  
    if (typeof id ==="number" && id > this.users.length) {
      this._id = id;      
    } 
    else {
      console.error(`${this.users.length}-től nagyobb számot kérek!`);
      return;
    }
  }  

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName && newName.length > 0) {
      this._name = newName;
    } 
    else {
      console.error("Nem ér a neved...");
      return;
    }
  }

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (newEmail && newEmail.length > 0 && regex.test(newEmail)) {
      this._email = newEmail;
    } else {
      console.error("Helytelen email cím.");
      return;
    }
  }

  findtUserById(id: number): IBorrower | string{
    let user = this.users.find((user) => user.id === id);
    if (user) {      
       return user;
    }
    else{
      return "Nincs ilyen ügyfelünk";
    }   
  }

  borrowing(id: number, bookId: number){
    const loaner = new Loaner();
    let borrowedBook = loaner.borrowBook(bookId);
   
    let borrower = this.findtUserById(id);
    if (typeof borrower !== "string") {
      borrower.borrovedBooks = [];

      if (typeof borrowedBook !== "string") {
        borrower.borrovedBooks.push(borrowedBook)
        console.log(`${borrower.name} ezeket a könyveket kölcsönözte ki:`);
        console.log(borrower.borrovedBooks);
      }
    }    
    else{
      console.log("Kölcsönzés sikertelen");
    }
  }
}
