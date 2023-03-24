import {Component, OnInit} from '@angular/core';
import {IcecreamService} from "../services/icecream.service";
import {ShoppingcartModel} from "../model/shoppingcart.model";
import {dexieService} from "../services/dexie.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  icecreamProducts: ShoppingcartModel[] = [];
  completePrice: number = 0;

  constructor(private icecreamService: IcecreamService) {
  }

  ngOnInit() {
    this.icecreamService.getCustomerItems().then((icecreamList) => {
      this.icecreamProducts = icecreamList
      if (this.icecreamProducts.length > 0) {
        for (let icecream of this.icecreamProducts) {
          console.log(icecream.price * icecream.amount)
          this.completePrice = this.completePrice + (icecream.price * icecream.amount)
        }
      }
    });
  }

  async removeCartItem(shoppingcartItem: ShoppingcartModel) {
    const currentSelectedItemInCart = await dexieService.icecreamShoppingCart.where("id").equals(shoppingcartItem.id as number).first();

    if (currentSelectedItemInCart != undefined && currentSelectedItemInCart.id != null) {
      await dexieService.icecreamShoppingCart.delete(currentSelectedItemInCart.id);
      this.icecreamProducts = await dexieService.icecreamShoppingCart.toArray();
    }
  }

}
