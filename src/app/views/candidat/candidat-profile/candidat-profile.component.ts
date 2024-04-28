import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { AuthcandidatService } from '../../service/authcandidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidat-profile',
  templateUrl: './candidat-profile.component.html',
  styleUrls: ['./candidat-profile.component.css']
})
export class CandidatProfileComponent implements OnInit{
  user:any={};
  candidat:any={};
  candidatinfo:any={};
  expPro:any={};
  expAca:any={};
  skills:any={};
  username='';
  candidatId='';
  candidatData:any={};
  profileCompletion: number = 0;
  constructor(private datas:DataService,private authCandidate:AuthcandidatService,private router: Router){}
  ngOnInit(): void {


    this.user=this.datas.getUser();
    this.authCandidate.getcandidatbyuserid(this.user.id).subscribe((data:any)=>{
      this.candidatId=data._id;
      console.log(this.candidatId);
      this.candidatData=data;
      console.log(this.candidatData);
      this.getCandidatinfo();
      this.getpersontage();
      this.getcandidatExp(this.candidatData._id);
    });
  }
  navigateToUpdateProfile() {
    this.router.navigate(['/candidat/updateprofile'], { queryParams: { id: this.candidatId } });
  }
  getpersontage():void{
    this.authCandidate.getProfileCompletion(this.candidatId).subscribe(completion => {
      this.profileCompletion = completion;
      console.log(this.profileCompletion);
    });
  }
  getCandidatinfo():void{
    this.datas.getUserById(this.user.id).subscribe(data=>{
      this.candidat=data;
      console.log(this.candidat);
    });
  }
getcandidatExp(f:string){
   this.authCandidate.getexpprobyidcandidat(f).subscribe((expp:any)=>{
    this.expPro=expp;
    console.log(expp);
   });
   this.authCandidate.getexpacadbyidcandidat(f).subscribe((expa:any)=>{
    this.expAca=expa;
   });
   this.authCandidate.getskillsbyidcandidat(f).subscribe((skill:any)=>{
    this.skills=skill;
   });
}

DeleteAca(f:string,i:number){
  this.authCandidate.deletebyId(f).subscribe({
    next: (response:any) => {

        console.log(' supprimé avec succès', response);
        // Remove the item from the data array
        if (i !== -1) {
            this.expAca.splice(i, 1);
        }
    },
    error: (error:any) => {
        console.error('Erreur lors de la suppression ', error);
        // Handle the error here
    }
});

}
DeletePro(f:string,i:number){
  this.authCandidate.deletebyId(f).subscribe({
    next: (response:any) => {

        console.log(' supprimé avec succès', response);
        // Remove the item from the data array
        if (i !== -1) {
            this.expPro.splice(i, 1);
        }
    },
    error: (error:any) => {
        console.error('Erreur lors de la suppression ', error);
        // Handle the error here
    }
});}

Deleteskill(f:string,i:number){
  this.authCandidate.deletebyIdskill(f).subscribe({
    next: (response:any) => {

        console.log(' supprimé avec succès', response);
        // Remove the item from the data array
        if (i !== -1) {
            this.skills.splice(i, 1);
        }
    },
    error: (error:any) => {
        console.error('Erreur lors de la suppression ', error);
        // Handle the error here
    }
});

}

}
