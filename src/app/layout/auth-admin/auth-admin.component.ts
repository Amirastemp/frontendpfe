import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';



@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css']
})
export class AuthAdminComponent implements OnInit {
  loginUserData :any= {
    email: '',
    password: ''};
  isLoggedIn = false;
  isLoginFailed = false;
  user:any={};
  url='';
  errorMessage = '';
  constructor(private authadmin:AuthadminService,
    private _router:Router,private arouter:ActivatedRoute){
      if(this.authadmin.LoggedIn()==true){
        // this._router.navigate(['/admin'])
    }
    }
  ngOnInit(): void {
      window.sessionStorage.removeItem("user")
      this.url=this.arouter.snapshot.queryParams['returnUrl']
      console.log(this.url)
      // console.log(this.authadmin.LoggedIn());
    this.errorMessage = '';
  }


  onSubmit(): void {
    this.authadmin.onSubmit(this.loginUserData).subscribe({
      next: (data:any) => {
        console.log('Login successful:', data);
        localStorage.setItem('Token',data.accessToken);
        this.authadmin.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        if(data.role=="Admin" && data.active==true){
          this._router.navigate(['/admin']);
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
