import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
const USER_KEY="user";
@Injectable({
  providedIn: 'root'
})


export class AuthadminService {
  helper=new JwtHelperService()
// url of login admin
 private _loginUrl = "http://localhost:3000/api/auth/login";
 private  _RhUrl= "http://localhost:3000/api/auth/rhSignUp";
 private  _EmployeeUrl= "http://localhost:3000/api/auth/employees";
 private _logoutUrl="http://localHost:3000/api/auth/logout"
 private  _registerUrl= "http://localhost:3000/api/auth/register";
 private  _rhsUrl= "http://localhost:3000/api/auth/rhs";
 private  _employeesUrl= "http://localhost:3000/api/auth/emplSignup";
  constructor(private http:HttpClient) { }
/**************************************************** */
 onSubmit(user: any) {
  return this.http.post<any>(this._loginUrl, user)
}
 registerUser(formData:FormData){
  return this.http.post<any>(this._registerUrl,formData)
   }
   login(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
/************************************************************************ */
 Rhs(user: any){
    return this.http.get<any>(this._rhsUrl,user)
     }
/***********************Employees******************************************** */
getEmployees(user: any){
  return this.http.get<any>(this._EmployeeUrl,user)
   }
/**************************************************************/
registerRH(formData:FormData){
  return this.http.post<any>(this._RhUrl,formData)
   }
/*****************************registeremployee******************************** */
registerEmployee(formData:FormData){
  return this.http.post<any>(this._employeesUrl,formData)
   }
/************************************************************** */
public saveUser(user: any): void {
  window.sessionStorage.removeItem(USER_KEY);
  window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
}
/********************************************************* */
LoggedIn(): boolean {
  const user = sessionStorage.getItem(USER_KEY);
  if (user) {
    const userData = JSON.parse(user); // Parse the string to convert it back to an object
    return userData.role === 'director';
  }
  return false;
}
logout(){
  return this.http.post<any>(this._logoutUrl,{});
}
}
