import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  private _Url="http://localhost:3000/api/job/addjobPost";
  private _url="http://localhost:3000/api/job/alljobPost";
  private _urldel="http://localhost:3000/api/job/deljobPost";
  private _urlopen="http://localhost:3000/api/job/openjobPost";
  private _urljone="http://localhost:3000/api/job/onejobPost";
  private _urlup="http://localhost:3000/api/job/updatejobPost";
  //job Application
  private _UrlA="http://localhost:3000/api/jobapplication/addjobapplication";
  private _urlA="http://localhost:3000/api/jobapplication/getalljobapplication";
  private _urlAup="http://localhost:3000/api/jobapplication/updatejobapplication";
  constructor(private http:HttpClient) { }


  addjobpost(job: any) {
    return this.http.post<any>(this._Url, job)
  }

  alljobpost() {
    return this.http.get<any>(this._url);
  }
  getJobPostDetails(jobId:string) {
    return this.http.get<any>(`${this._urljone}/${jobId}`);
  }
  updatejobpost(jobId:string,job:any) {
    return this.http.put<any>(`${this._urlup}/${jobId}`,job);
  }
  deleteJobPost(jobId:string) {
    return this.http.delete<any>(`${this._urldel}/${jobId}`);
  }
  openjobpost(){
    return this.http.get<any>(this._urlopen);
  }
  //job application crud

  addjobapplication(job: any) {
    return this.http.post<any>(this._UrlA, job)
  }
  getallapplications() {
    return this.http.get<any>(this._urlA);
  }
  updatejobapplication(jobId:string,job:any) {
    return this.http.put<any>(`${this._urlAup}/${jobId}`,job);
  }
}
