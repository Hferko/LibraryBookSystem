import { Category } from "./category.js";

export default interface Ibook {
  bookId: number;
  title: string;
  author: string;  
  available?: boolean;
  category?: Category;
}