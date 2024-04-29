import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  private _Url="http://localhost:3000/api/job/addjobPost"
  constructor(private http:HttpClient) { }


  addjobpost(job: any) {
    return this.http.post<any>(this._Url, job)
  }
}
