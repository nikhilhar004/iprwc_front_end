import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class CoreModule { }
