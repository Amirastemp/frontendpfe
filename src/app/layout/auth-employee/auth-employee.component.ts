import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthemployeeService } from 'src/app/views/service/authemployee.service';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-auth-employee',
  templateUrl: './auth-employee.component.html',
  styleUrls: ['./auth-employee.component.css']
})
export class AuthEmployeeComponent implements OnInit {
  loginUserData :any= {
    email: '',
    password: ''};
  isLoggedIn = false;
  isLoginFailed = false;
  user:any={};
  url='';
  errorMessage = '';
  constructor(private auth:AuthemployeeService,
    private _router:Router,private data:DataService,private arouter:ActivatedRoute){

    }
  ngOnInit(): void {
      window.sessionStorage.removeItem("user")
      this.url=this.arouter.snapshot.queryParams['returnUrl']
      console.log(this.url)
      // console.log(this.authadmin.LoggedIn());
    this.errorMessage = '';
  }


  onSubmit(): void {
    this.auth.login(this.loginUserData).subscribe({
      next: (data:any) => {
        console.log('Login successful:', data);
        localStorage.setItem('Token',data.accessToken);
        this.data.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        if(data.role=="employee" && data.active==true){
          this._router.navigate(['/employee']);
        }
      },
      error: (err:any) => {
        this.isLoginFailed = true;
        this.isLoggedIn = false;
        if (err.status === 401) {
          this.errorMessage = 'Email or password incorrect';
        } else if (err.status === 404) {
          this.errorMessage = 'User does not exist';
        }
      }
    });
  }
}



