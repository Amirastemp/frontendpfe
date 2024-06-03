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
  role=''
constructor(private datas:DataService,private routeA:ActivatedRoute,private router:Router){}
ngOnInit(): void {
  this.routeA.queryParams.subscribe(params => {
    this.selectedUserId = params['id'];
    console.log('Selected User ID:', this.selectedUserId);
    this.getemployee();
  });
}

getemployee(): void {
  this.datas.getUserById(this.selectedUserId).subscribe(
    data => {
      this.employee = data;
      this.role = data.role;
      console.log('Employee Data:', this.employee);
      console.log('Employee Role:', this.role);
    },
    error => {
      console.error('Error fetching employee data:', error);
    }
  );
}

updateProfile(): void {
  if (!this.role) {
    console.error('Role is not defined');
    return;
  }
  console.log('Navigating to profile with role:', this.role);

  if (this.role =='employee') {
    this.router.navigate(['/employee/updateprofile'], { queryParams: { id: this.selectedUserId } });
  } else if (this.role =='RH') {
    this.router.navigate(['/rh/updateprofile'], { queryParams: { id: this.selectedUserId } });
  } else {
    this.router.navigate(['/admin/updateprofile'], { queryParams: { id: this.selectedUserId } });
  }
}

}

