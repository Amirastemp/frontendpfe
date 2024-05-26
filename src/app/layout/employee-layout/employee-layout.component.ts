import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent implements OnInit{
   user:any={};
   employeeId='';
   image:any;
   username='';
  constructor(private datas:DataService,private router:Router){}
  ngOnInit(): void {
    this.user=this.datas.getUser();
    this.employeeId=this.user.id;
    //display the user to bring the image and the username
    const user =this.datas.getUserById(this.employeeId).subscribe((data)=>{
      this.image=data.image;
      this.username=data.userName;
    })
  }
  navigateToProfile() {
    this.router.navigate(['/employee/profile'], { queryParams: { id: this.employeeId } });
  }
}
