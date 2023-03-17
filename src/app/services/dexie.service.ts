import Dexie from "dexie";
import {Icecream} from "../icecream/icecream.model";
import {ShoppingcartModel} from "../shoppingcart/shoppingcart.model";

export class DexieService extends Dexie{

  icecream!: Dexie.Table<Icecream, number>
  icecreamShoppingCart!: Dexie.Table<ShoppingcartModel, number>
  constructor() {
    super("MyAppDatabase");
    this.version(1).stores({
      icecream: "++id, name, description, price, imageURL",
      icecreamShoppingCart: "++id, name, price, amount"
    });
    this.on('populate', () => this.populate());
  }

  private async populate() {
    await dexieService.icecream.bulkAdd(
      [
        new Icecream(
          'Vanilla',
          'A Classic amongst many and refined till perfection.',
          5,
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vanilla_Ice_Cream_Cone_at_Camp_Manitoulin.jpg/220px-Vanilla_Ice_Cream_Cone_at_Camp_Manitoulin.jpg'
        ),
        new Icecream(
          'Strawberry',
          'Normally very nice and refreshing as a common choice.',
          5,
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg/180px-Strawberry_ice_cream_cone_%285076899310%29.jpg'
        )
      ]
    );
  }
}

export const dexieService = new DexieService();
