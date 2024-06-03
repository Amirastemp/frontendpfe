import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthcandidatService } from '../../service/authcandidat.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
selectedUserId='';
skilldata:any={};
constructor(private routeA:ActivatedRoute,private auth:AuthcandidatService,private route :Router){}
  ngOnInit(): void {
    this.routeA.queryParams.subscribe(params => {
      this.selectedUserId = params['id'];
      console.log(this.selectedUserId);
      this.getSkill();
    });
  }
getSkill(){
this.auth.getskillById(this.selectedUserId).subscribe((data:any)=>{
this.skilldata=data;
})
}
onsubmit(){
  this.auth.updateskill(this.selectedUserId, this.skilldata).subscribe((data: any) => {
    console.log('Skills successfully saved');

  });
  this.route.navigate(['/candidat/profile'], { queryParams: { id: this.selectedUserId } });
}

}
