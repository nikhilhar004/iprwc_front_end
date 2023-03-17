import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IcecreamComponent} from "./icecream/icecream.component";
import {ShoppingcartComponent} from "./shoppingcart/shoppingcart.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'icecream', pathMatch: 'full' },
  { path: 'icecream', component: IcecreamComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
