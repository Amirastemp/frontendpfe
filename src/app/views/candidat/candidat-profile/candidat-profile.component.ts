import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { AuthcandidatService } from '../../service/authcandidat.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  cvFile:File|undefined;
  cvFileUrl: SafeResourceUrl | undefined;
  constructor(private datas:DataService,private authCandidate:AuthcandidatService,private router: Router,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.user=this.datas.getUser();
    this.authCandidate.getcandidatbyuserid(this.user.id).subscribe((data:any)=>{
      this.candidatId=data._id;
      console.log(this.candidatId);
      this.candidatData=data;
      this.cvFile=data.cvFile;
      console.log(this.cvFile);
      console.log(this.candidatData);
      this.getCandidatinfo();
      this.getpersontage();
      this.getcandidatExp(this.candidatData._id);
      // Assuming cvFile contains the URL or file path of the CV file
      //  this.cvFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.cvFile);
    });
  }

  navigateToUpdateProfile() {
    this.router.navigate(['/candidat/updateprofile'], { queryParams: { id: this.candidatId } });
  }
  EditSkill(_id:string) {
    this.router.navigate(['/candidat/updateskill'], { queryParams: { id:_id } });
  }
  EditProf(_id:string) {
    this.router.navigate(['/candidat/updateprof'], { queryParams: { id:_id } });
  }
  EditAcad(_id:string) {
    this.router.navigate(['/candidat/updateacademic'], { queryParams: { id:_id } });
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
  this.authCandidate.deletebyIdAca(f).subscribe({
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
