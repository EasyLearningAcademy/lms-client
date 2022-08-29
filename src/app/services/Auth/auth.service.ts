import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl = environment.baseUrl;

  public userBaseUrl = environment.userBaseUrl

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

    // FUNCTION FOR SIGN UP 
    signup(data: any) {
      return this._http.post<any>(`${this.baseUrl}register`, data);
    }

    // FUNCTION FOR LOGIN
    login(data:any) {
      return this._http.post<any>(`${this.baseUrl}login`, data);
    }

}
