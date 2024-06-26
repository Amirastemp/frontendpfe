import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const USER_KEY='user'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  updateuserById(_id: any, candidat: any) {
    throw new Error('Method not implemented.');
  }
  private  _deleteUrl= "http://localhost:3000/api/auth/users";
  private  _usersUrl= "http://localhost:3000/api/auth/users";
  private  _passUrl= "http://localhost:3000/api/auth/changepassword";
  private  codeUrl= "http://localhost:3000/api/auth/send-verification-code";
  private  crstUrl= "http://localhost:3000/api/auth/verify-code-and-reset-password";
 private _userUrl="http://localhost:3000/api/auth/users";
 private _msgUrl="http://localhost:3000/api/contact/addmessage";
 private _searchUrl="http://localhost:3000/api/search/searchUser";
 private _logoutUrl="http://localHost:3000/api/auth/logout"
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

  updateuser(userId: string, userdata: FormData) {
    return this.http.put<any>(`${this._userUrl}/${userId}`, userdata);
  }
  logout(): Observable<any> {
    return this.http.post<any>(this._logoutUrl,{});
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
  public search(f: string) {
    return this.http.get<any>(`${this._searchUrl}?search=${f}`);
    console.log('done');
  }
  sendContact(data:any){
    return this.http.post<any>(`${this._msgUrl}`,data);
  }
  changepassword(data:any){
    return this.http.put<any>(`${this._passUrl}`,data);
  }
  sendVerificationCode(email: string): Observable<any> {
    return this.http.post(`${this.codeUrl}`, { email });
  }

  verifyCodeAndResetPassword(data: any): Observable<any> {
    return this.http.post(`${this.crstUrl}`, data);
  }
}
