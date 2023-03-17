import { Injectable } from '@angular/core';
import {Icecream} from "../icecream/icecream.model";
import {Subject} from "rxjs";
import {DexieService} from "./dexie.service";
import {dexieService} from "./dexie.service";
import {ShoppingcartModel} from "../shoppingcart/shoppingcart.model";

@Injectable({
  providedIn: 'root'
})
export class IcecreamService {

  constructor() {
  }

  icecreamChanged = new Subject<Icecream[]>();


  async getIcecream(): Promise<Icecream[]> {
    try {
      return dexieService.icecream.toArray();
    } catch (error) {
      return [];
    }
  }

  async getCustomerItems(): Promise<ShoppingcartModel[]> {
    try {
      return dexieService.icecreamShoppingCart.toArray();
    } catch (error) {
      return []
    }
  }
}
