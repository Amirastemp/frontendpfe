import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit{
  selectedUserId='';
  employee:any={};
  constructor(private routeA:ActivatedRoute,private datas:DataService){}
  ngOnInit(): void {
    this.routeA.queryParams.subscribe(params => {
      this.selectedUserId = params['id'];
      console.log(this.selectedUserId);
      this.getemployee()

    });
  }
  getemployee():void{
    this.employee=this.datas.getUserById(this.selectedUserId).subscribe((data)=>{
     this.employee=data
    })
  }
  handleFileInput(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const image = input.files[0];
      if (fileType === 'profile-photo') {
        this.employee.image = image;
      }
    }
  }
  onSubmit():void{
    const formData = new FormData();
    formData.append('email', this.employee.email);
    formData.append('password', this.employee.password);
    formData.append('firstName', this.employee.firstName);
    formData.append('lastName', this.employee.lastName);
    formData.append('userName', this.employee.userName);
    formData.append('description', this.employee.description);
    formData.append('phone', this.employee.phone.toString());
    formData.append('address', this.employee.address);
    if (this.employee.image) {
      formData.append('image', this.employee.image);
    }

    this.datas.updateuser(this.selectedUserId, formData).subscribe((data=>{
      console.log('Employee data successfully updated');
    }));

     
    }
  
}
