import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {BehaviorSubject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../model/AuthResponse.model";
import {JwtToken} from "../model/JwtToken.model";
import {Observable} from "rxjs";
import {environment} from "../environment";



const BASE_URL = environment.apiURL + "/api"

@Injectable({ providedIn: 'root' })
export class AuthService implements CanActivate, CanActivateChild {
  private _isLoggedIn = new BehaviorSubject<boolean>(false)

  loggedIn = this._isLoggedIn.asObservable()

  private _changePassword = new BehaviorSubject<boolean>(false)
  changePassword = this._changePassword.asObservable()

  token = ""



  // @ts-ignore
  constructor(private router: Router, private http: HttpClient) {
    const token = this.checkForKey()
    this._isLoggedIn.next(token)
  }


  checkForKey(): boolean {
    return !!localStorage.getItem("auth_key")
  }


  login(email: string, pass: string) {
    return this.http.post<AuthResponse>(BASE_URL + "/auth/login", {
      email:email,
      password: pass
    }).pipe(tap(data => {
      console.log(data)
      if (!data.success) return
      const token = this.decodeJWTToken(data.jwtToken)
      if (token.defaultPass) {
        this._changePassword.next(true)
        this.token = data.jwtToken
      } else {
        localStorage.setItem("auth_key", data.jwtToken)
        this._isLoggedIn.next(true)
      }
    }))
  }

  register(email: string, name: string, pass: string) {

    return this.http.post<AuthResponse>(BASE_URL + "/auth/register", {
      email: email,
      password: pass,
      name: name
    }).pipe(tap(data => {
      if (!data.success) return
      const token = this.decodeJWTToken(data.jwtToken)
      // this.checkForAdmin(data.jwtToken)
      if (token.defaultPass) {
        this._changePassword.next(true)
        this.token = data.jwtToken
      } else {
        localStorage.setItem("auth_key", data.jwtToken)
        this._isLoggedIn.next(true)
      }
    }))
  }

  decodeJWTToken(token: string): JwtToken {
    const object = JSON.parse(atob(token.split('.')[1]))
    return new JwtToken(object["defaultPass"], object["sub"], object["role"], object["name"], object["iss"], object["id"], object["iat"], object["email"]);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this._isLoggedIn.getValue()) return true
    else {
      this.router.navigate(["/login"])
      return false
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state)
  }
}
