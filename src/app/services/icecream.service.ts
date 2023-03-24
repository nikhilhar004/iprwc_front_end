import { Injectable } from '@angular/core';
import {Icecream} from "../model/icecream.model";
import {Subject} from "rxjs";
import {DexieService} from "./dexie.service";
import {dexieService} from "./dexie.service";
import {ShoppingcartModel} from "../model/shoppingcart.model";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class IcecreamService {

  constructor(private httpService: HttpService) {
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
