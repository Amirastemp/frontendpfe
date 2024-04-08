import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CongéService {
private url="http://localhost:3000/api/conge/request";
private Url="http://localhost:3000/api/conge/requests";
  constructor(private http:HttpClient) { }
  updaterequest(userId: string, userdata: any) {
    return this.http.put<any>(`${this.url}/${userId}`, userdata);
  }
  Deleterequest(userId: string) {
    return this.http.delete<any>(`${this.url}/${userId}`);
  }


}
