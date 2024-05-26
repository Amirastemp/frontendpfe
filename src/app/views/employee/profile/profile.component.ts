import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  employee:any={};
  selectedUserId='';
constructor(private datas:DataService,private routeA:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.routeA.queryParams.subscribe(params => {
      this.selectedUserId = params['id'];
      console.log(this.selectedUserId);});
this.getemployee();
  }
getemployee():void{
  this.employee=this.datas.getUserById(this.selectedUserId).subscribe((data)=>{
   this.employee=data
  })
}
updateProfile() {
  this.router.navigate(['/employee/updateprofile'], { queryParams: { id: this.selectedUserId } });
}
}
