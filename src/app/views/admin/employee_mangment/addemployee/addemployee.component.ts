import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit  {
  registerUserData: any = {};
  errorMessage = '';
  userRole='';
  isSuccessful = false;
  isSignUpFailed = false;
  user:any={};
  ngOnInit(): void {

    }


  constructor(private _auth: AuthadminService,private _router:Router,private datas:DataService) { }

  handleFileInput(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const image = input.files[0];
      if (fileType === 'image') {
        this.registerUserData.image = image;
      }
    }
  }
  onSubmit():void{
    const formData = new FormData();
    formData.append('email', this.registerUserData.email);
    formData.append('password', this.registerUserData.password);
    formData.append('firstName', this.registerUserData.firstName);
    formData.append('lastName', this.registerUserData.lastName);
    formData.append('userName', this.registerUserData.userName);
    formData.append('description', this.registerUserData.description);
    formData.append('phone', this.registerUserData.phone.toString());
    formData.append('hiring_date', this.registerUserData.hiring_date.toString());
    formData.append('address', this.registerUserData.address);
    formData.append('active', this.registerUserData.active);
    if (this.registerUserData.image) {
      formData.append('image', this.registerUserData.image);
    }
    this._auth.registerEmployee(formData).subscribe({
      next: (data: any) => {
        console.log('Response:', data);
        this.user=this.datas.getUser();
        this.userRole=this.user.role;

        this.isSuccessful = true;
        this.isSignUpFailed = false;

        if(this.userRole=='RH'){
          this._router.navigate(['/rh/employees']);
        }else if (this.userRole=='admin'){
          this._router.navigate(['/admin/employees']);
        }

      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

    // localStorage.setItem('Token',data.token)
        // this.usersService.saveUser(data);

        // this.reloadPage();
  reloadPage(): void {
    window.location.reload();
  }
}
