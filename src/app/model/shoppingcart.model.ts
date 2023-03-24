export class ShoppingcartModel {
  id?: number;
  name: string;
  price: number;
  amount: number;

  constructor(name: string, price: number, amount: number, id?: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.id = id;
  }
}
