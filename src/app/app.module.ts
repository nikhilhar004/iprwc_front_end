import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {IcecreamComponent} from "./icecream/icecream.component";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './icecream/filter.pipe';
import { LoginComponent } from './login/login.component';
import { AddIcecreamComponent } from './admin/add-icecream/add-icecream.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    IcecreamComponent,
    ShoppingcartComponent,
    FilterPipe,
    LoginComponent,
    AddIcecreamComponent
  ],
    imports: [
        BrowserModule,
        CoreModule,
        RouterOutlet,
        RouterLink,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatGridListModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
