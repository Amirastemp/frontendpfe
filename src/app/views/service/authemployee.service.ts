import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const USER_KEY='user';
@Injectable({
  providedIn: 'root'
})
export class AuthemployeeService {
private reqUrl= "http://localhost:3000/api/conge/request";
private Url= "http://localhost:3000/api/conge/requests";
private idUrl= "http://localhost:3000/api/conge/requests";
private _loginUrl= "http://localhost:3000/api/auth/login";
  constructor(private http:HttpClient) { }


  login(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  public getUser(){
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  /*************************requests******************************* */
  addrequest(requestData: any): Observable<any> {
    return this.http.post<any>(this.reqUrl, requestData);

  }
  request(){
      return this.http.get<any>(this.Url)
       }
  requestbyidemp(f:string){
        return this.http.get<any>(`${this.idUrl}/${f}`)
         }
  getrequestbyId(userId: string) {
    return this.http.get<any>(`${this.reqUrl}/${userId}`);
  }


}
