import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registratieMode: boolean = false;

  @ViewChild("formLogin") formLogin?:NgForm
  @ViewChild("formRegister") formRegister?:NgForm

  email = ""
  password = ""

  AwaitResponse = false
  error?: string

  loginEmailInput = true
  loginPasswordInput = true

  registerUsernameInput = true
  registerEmailInput = true
  registerPasswordInput1 = true
  registerPasswordInput2 = true

  constructor(private authService:AuthService, private router:Router) {
    this.authService.loggedIn.subscribe((loggedIn: boolean) => {
      if (loggedIn) router.navigate(["/icecream"])
    })
  }

  changeLoginState() {
    this.registratieMode = !this.registratieMode
  }

  onSubmitLogin() {
    this.loginEmailInput = true
    this.loginPasswordInput = true

    const email = this.formLogin?.value.email
    const password = this.formLogin?.value.password

    if (!email) this.loginEmailInput = false
    if (!password) this.loginPasswordInput = false


    if (this.loginEmailInput && this.loginPasswordInput) {
      this.AwaitResponse = true

      this.authService.login(email, password).subscribe((data) => {
        this.error = data.message
        this.AwaitResponse = false
      })
    }
  }

  onSubmitRegister() {
    this.registerUsernameInput = true
    this.registerEmailInput = true
    this.registerPasswordInput1 = true
    this.registerPasswordInput2 = true

    const email = this.formRegister?.value.email
    const name = this.formRegister?.value.name
    const password1 = this.formRegister?.value.password1
    const password2 = this.formRegister?.value.password2

    if (!name) this.registerUsernameInput = false
    if (!email) this.registerEmailInput = false
    if (!password1) this.registerPasswordInput1 = false
    if (!password2) this.registerPasswordInput2 = false

    if (password1 && password1.length < 6) {
      this.registerPasswordInput1 = false
      this.registerPasswordInput2 = false
      this.error = "Password needs at least 6 characters"
    }

    if (password1 !== password2) {
      this.registerPasswordInput1 = false
      this.registerPasswordInput2 = false
      this.error = "Passwords does not match"
    }

    if (this.registerUsernameInput && this.registerEmailInput && this.registerPasswordInput1 && this.registerPasswordInput2) {
      this.AwaitResponse = true

      this.authService.register(email, name, password1).subscribe((data) => {
        this.error = data.message
        this.AwaitResponse = false
      })
    }
  }
}
