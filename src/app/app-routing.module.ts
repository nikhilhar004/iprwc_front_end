import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IcecreamComponent} from "./icecream/icecream.component";
import {ShoppingcartComponent} from "./shoppingcart/shoppingcart.component";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'icecream', pathMatch: 'full' },
  { path: 'icecream', component: IcecreamComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
