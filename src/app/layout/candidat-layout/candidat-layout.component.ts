import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/service/data.service';
import { AuthCandidatComponent } from '../auth-candidat/auth-candidat.component';
import { AuthcandidatService } from 'src/app/views/service/authcandidat.service';

@Component({
  selector: 'app-candidat-layout',
  templateUrl: './candidat-layout.component.html',
  styleUrls: ['./candidat-layout.component.css']
})
export class CandidatLayoutComponent implements OnInit {
  user:any={};
  username='';
  candidatId='';
  profileCompletion: number = 0;
  constructor(private datas:DataService,private authCandidate:AuthcandidatService){}
  ngOnInit(): void {
    this.user=this.datas.getUser();
    console.log(this.user);
    this.username=this.user.username;
    this.candidatId=this.user.candidatId;
    console.log(this.username);

    //Obtenir le pourcentage de complétion du profil du candidat depuis le service
        this.authCandidate.getProfileCompletion(this.candidatId).subscribe(completion => {
          this.profileCompletion = completion;
          console.log(this.profileCompletion);
        });

  }

}
