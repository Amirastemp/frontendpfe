import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcandidatService {

  private _loginUrl= "http://localhost:3000/api/auth/login";
  private _userUrl="http://localhost:3000/api/auth/users";

  private _urluser="http://localhost:3000/api/candidat/getCandidatByuserId"
  private _Url= "http://localhost:3000/api/candidat/register";
  private _url= "http://localhost:3000/api/candidat/update";
  private _Urlc= "http://localhost:3000/api/candidat/getCandidateById";
  private _Urlp= "http://localhost:3000/api/candidat/persontage";
  // les competence de la candidat
  private _urlExpp="http://localhost:3000/api/competence/expPro";
  private _urlExpaca="http://localhost:3000/api/competence/expAca";

  private _urlskill="http://localhost:3000/api/competence/skill";
  private _urlskillid="http://localhost:3000/api/competence/getskillbyid";
  private _urlProid="http://localhost:3000/api/competence/getProbyid";
  private _urlAcaid="http://localhost:3000/api/competence/getAcabyid";

  private _ppurl="http://localhost:3000/api/competence/addExperienceProbyId"
  private _Acaurl="http://localhost:3000/api/competence/addExperienceAcabyId"
  private _skillurl="http://localhost:3000/api/competence/addskillsbyId"

  private _delproUrl="http://localhost:3000/api/competence/deleteprobyid"
  private _delacaUrl="http://localhost:3000/api/competence/deleteacabyid"
  private _delskillUrl="http://localhost:3000/api/competence/deleteskillbyid"

  private _skillup="http://localhost:3000/api/competence/updateskill"
  private _Acaup="http://localhost:3000/api/competence/updateexpAca"
  private _Proup="http://localhost:3000/api/competence/updateexpPro"
  
  constructor(private http:HttpClient) { }


  login(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  register(formData:FormData){
    return this.http.post<any>(this._Url, formData)
  }
  getProfileCompletion(id:string){
    return this.http.get<any>(`${this._Urlp}/${id}`)
  }
  getcandidatbyid(id:string){
    return this.http.get<any>(`${this._Urlc}/${id}`)
  }
  getexpprobyidcandidat(id:string){
    return this.http.get<any>(`${this._urlExpp}/${id}`)
  }
  getexpacadbyidcandidat(id:string){
    return this.http.get<any>(`${this._urlExpaca}/${id}`)
  }
  getskillsbyidcandidat(id:string){
    return this.http.get<any>(`${this._urlskill}/${id}`)
  }
  getcandidatbyuserid(id:string){
    return this.http.get<any>(`${this._urluser}/${id}`)
  }
  updateuserById(userId: string, userdata: any) {
    return this.http.put<any>(`${this._userUrl}/${userId}`, userdata);
  }
  addExperienceProbyId(userId: string, userdata: any) {
    return this.http.post<any>(`${this._ppurl}/${userId}`, userdata);
  }
  addExperienceAcabyId(userId: string, userdata: any) {
    return this.http.post<any>(`${this._Acaurl}/${userId}`, userdata);
  }
  addskillsbyId(userId: string, userdata: any) {
    return this.http.post<any>(`${this._skillurl}/${userId}`, userdata);
  }
  deletebyId(userId: string, ) {
    return this.http.delete<any>(`${this._delproUrl}/${userId}`);
  }
  deletebyIdskill(userId: string, ) {
    return this.http.delete<any>(`${this._delskillUrl}/${userId}`);
  }
  deletebyIdAca(userId: string, ) {
    return this.http.delete<any>(`${this._delacaUrl}/${userId}`);
  }
  updateCandidat(userId: string, userdata:FormData) {
    return this.http.put<any>(`${this._url}/${userId}`, userdata);
  }
  getskillById(skill:string){
    return this.http.get<any>(`${this._urlskillid}/${skill}`)
  }
  updateskill(skillId: string, skilldata:any) {
    return this.http.put<any>(`${this._skillup}/${skillId}`, skilldata);
  }
  updateExpAca(AcaId: string, Acadata:any) {
    return this.http.put<any>(`${this._Acaup}/${AcaId}`, Acadata);
  }
  updatePro(ProId: string, Prodata:any) {
    return this.http.put<any>(`${this._Proup}/${ProId}`, Prodata);
  }
  getAcaById(Aca:string){
    return this.http.get<any>(`${this._urlAcaid}/${Aca}`)
  }
  getProById(Pro:string){
    return this.http.get<any>(`${this._urlProid}/${Pro}`)
  }
}
