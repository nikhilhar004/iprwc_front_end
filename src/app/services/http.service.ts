import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../environment";
import {Observable} from "rxjs";

const url = environment.apiURL + "/api"
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public getData<T>(path: String): Observable<Array<T>> {
    return this.http
      .get<T[]>(url + path)
  }

  public sendData<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(url + path, data)
  }
}
