import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcandidatService {

  private _loginUrl= "http://localhost:3000/api/auth/login";
  private _Url= "http://localhost:3000/api/candidat/register";
  constructor(private http:HttpClient) { }


  login(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  register(user:any){
    return this.http.post<any>(this._Url, user)
  }

}
