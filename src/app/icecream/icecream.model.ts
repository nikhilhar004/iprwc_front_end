export class Icecream {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;

  constructor(name: string, description:string, price: number, imageURL: string, id?: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageURL = imageURL;
    this.id = id;
  }
}
