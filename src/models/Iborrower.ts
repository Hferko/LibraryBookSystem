import Ibook from "./Ibook.js";

export default interface IBorrower {
  id: number;
  name: string;
  email: string;
  borrovedBooks?: Ibook[];
}
