import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthcandidatService } from '../../service/authcandidat.service';

@Component({
  selector: 'app-update-prof',
  templateUrl: './update-prof.component.html',
  styleUrls: ['./update-prof.component.css']
})
export class UpdateProfComponent implements OnInit {
  selectedUserId='';
 ExpProfdata:any={};
  constructor(private routeA:ActivatedRoute,private auth:AuthcandidatService,private route :Router){}
    ngOnInit(): void {
      this.routeA.queryParams.subscribe(params => {
        this.selectedUserId = params['id'];
        console.log(this.selectedUserId);
        this.getExpProf();
      });
    }
  getExpProf(){
  this.auth.getProById(this.selectedUserId).subscribe((data:any)=>{
  this.ExpProfdata=data;
  })
  }
  onsubmit(){
    this.auth.updatePro(this.selectedUserId, this.ExpProfdata).subscribe((data: any) => {
      console.log('ExpProfs successfully saved');
    });
    this.route.navigate(['/candidat/profile'], { queryParams: { id: this.selectedUserId } });
  }

}
