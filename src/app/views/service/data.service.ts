import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const USER_KEY='user'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  _deleteUrl= "http://localhost:3000/api/auth/users";
  private  _usersUrl= "http://localhost:3000/api/auth/users";
 private _userUrl="http://localhost:3000/api/auth/users";
  constructor(private http:HttpClient) { }

  deleteuser(email: string):Observable<any> {
    const url = `${this._deleteUrl}?email=${email}`; // Concaténer l'email à l'URL
    return this.http.delete<any>(url);
  }
  getUserById(userId: string) {
    return this.http.get<any>(`${this._userUrl}/${userId}`);
  }
  getUsers(){
    return this.http.get<any>(this._usersUrl);
  }
  updateuser(userId: string, userdata: any) {
    return this.http.put<any>(`${this._userUrl}/${userId}`, userdata);
  }
  public isLoggedIn(): boolean {
    return !!window.sessionStorage.getItem(USER_KEY);
  }
  clean(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }
  public getUser(){
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
  }

}
