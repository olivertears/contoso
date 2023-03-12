export interface ICard {
  id: string;
  userId: string;
  number: string;
  validityDate: string;
  owner: string;
  cvv: string; // must be encoded
}
