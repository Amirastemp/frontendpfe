import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private _url="http://localhost:3000/api/training/addschedule";
  private _Url="http://localhost:3000/api/training/alltraining";
  private _urldel="http://localhost:3000/api/training/deletetraining";
  private _urll="http://localhost:3000/api/training/gettraining";
  private _urlup="http://localhost:3000/api/training/updatetraining";

  constructor(private http:HttpClient) { }


  addSchedule(training: any) {
    return this.http.post<any>(this._url, training)
  }
  alltraining() {
    return this.http.get<any>(this._Url);
  }
  deletetraining(trainingId:string) {
    return this.http.delete<any>(`${this._urldel}/${trainingId}`);
  }
   gettraining(trainingId:string) {
    return this.http.get<any>(`${this._urll}/${trainingId}`);
  }
  updatetraining(jobId:string,job:any) {
    return this.http.put<any>(`${this._urlup}/${jobId}`,job);
  }
}
