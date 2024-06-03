import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthcandidatService } from '../../service/authcandidat.service';

@Component({
  selector: 'app-update-academic',
  templateUrl: './update-academic.component.html',
  styleUrls: ['./update-academic.component.css']
})
export class UpdateAcademicComponent implements OnInit {
  selectedUserId='';
 ExpAcadata:any={};
  constructor(private routeA:ActivatedRoute,private auth:AuthcandidatService,private route :Router){}
    ngOnInit(): void {
      this.routeA.queryParams.subscribe(params => {
        this.selectedUserId = params['id'];
        console.log(this.selectedUserId);
        this.getExpAca();
      });
    }
  getExpAca(){
  this.auth.getAcaById(this.selectedUserId).subscribe((data:any)=>{
  this.ExpAcadata=data;
  });}
  
  onsubmit(){
    this.auth.updateExpAca(this.selectedUserId, this.ExpAcadata).subscribe((data: any) => {
      console.log('ExpAca successfully saved');
    });
    this.route.navigate(['/candidat/profile'], { queryParams: { id: this.selectedUserId } });
  }

}
