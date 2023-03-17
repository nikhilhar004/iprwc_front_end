import {Component, OnInit} from '@angular/core';
import {Icecream} from "../icecream/icecream.model";
import {IcecreamService} from "../services/icecream.service";
import {ShoppingcartModel} from "./shoppingcart.model";
import {dexieService} from "../services/dexie.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  icecreamProducts: ShoppingcartModel[] = [];

  constructor(private icecreamService: IcecreamService) {
  }

  ngOnInit() {
    this.icecreamService.getCustomerItems().then((icecreamList) => {
      this.icecreamProducts = icecreamList
    });
  }

  async removeCartItem(shoppingcartItem: ShoppingcartModel) {
    const currentSelectedItemInCart = await dexieService.icecreamShoppingCart.where("id").equals(shoppingcartItem.id as number).first();

    if (currentSelectedItemInCart != undefined && currentSelectedItemInCart.id != null) {
      await dexieService.icecreamShoppingCart.delete(currentSelectedItemInCart.id);
      this.icecreamProducts = await dexieService.icecreamShoppingCart.toArray();
      //TODO 2:Maak gebruik van dynamisch laden uit de Angular kit zelf, zonder 'location.reload' te gebruiken
    }
  }

}
