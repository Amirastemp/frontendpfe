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


  onSubmit(): void {
    const { firstName, lastName, userName, description,email, password, phone, active} = this.registerUserData;

    // Check if the checkbox is checked or unchecked
    const isActivated = active; // true if checked, false if unchecked

    this._auth.registerEmployee({ firstName, lastName, userName,description, email, password, phone, active: isActivated }).subscribe({

      next: (data: any) => {

        console.log(active)
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
