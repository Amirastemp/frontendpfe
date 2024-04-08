import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
const USER_KEY='user'
@Injectable({
  providedIn: 'root'
})
export class AuthrhService {
  private _loginUrl = "http://localhost:3000/api/auth/login";
  constructor(private http:HttpClient) { }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
  }
  onSubmit(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
}
