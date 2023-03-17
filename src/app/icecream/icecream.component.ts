import {Component, OnInit} from '@angular/core';
import {Icecream} from "./icecream.model";
import {IcecreamService} from "../services/icecream.service";
import {dexieService, DexieService} from "../services/dexie.service";
import {ShoppingcartModel} from "../shoppingcart/shoppingcart.model";

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit{

  icecreams: Icecream[] = [];
  filterProducts: string = '';

  addingToCart = false;

  constructor(private icecreamService: IcecreamService) {
  }
  ngOnInit() {
    this.icecreamService.getIcecream().then((icecreamList) => {
      this.icecreams = icecreamList
    });
  }

  addToCart(icecream: Icecream) {
    this.addingToCart = true;
    const promise = this.addToCartToDatabase(icecream);
    promise.then(() => {
      this.addingToCart = false;
    })
  }

  async addToCartToDatabase(icecream: Icecream) {
    let addedShoppingCartItem:ShoppingcartModel = new ShoppingcartModel(icecream.name, icecream.price, 1, icecream.id);
    const currentSelectedItemInCart = await dexieService.icecreamShoppingCart.where("id").equals(icecream.id as number).first();

    if (currentSelectedItemInCart == undefined) {
      dexieService.icecreamShoppingCart.add(addedShoppingCartItem);
    } else {
      currentSelectedItemInCart.amount += 1;
      dexieService.icecreamShoppingCart.put(currentSelectedItemInCart)
    }
  }
}
