import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthrhService } from 'src/app/views/service/authrh.service';

@Component({
  selector: 'app-auth-rh',
  templateUrl: './auth-rh.component.html',
  styleUrls: ['./auth-rh.component.css']
})
export class AuthRhComponent implements OnInit {
  loginUserData: any = {
    email: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  user: any = {};
  url = '';
  errorMessage=''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authrh: AuthrhService
  ) {}

  ngOnInit(): void {
    sessionStorage.removeItem('user');
  }

  login(): void {
    this.authrh.onSubmit(this.loginUserData).subscribe({
      next: (data: any) => {
        console.log('Login successful:', data);
        localStorage.setItem('Token', data.accessToken);
        this.authrh.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        if(data.role=="RH" && data.active==true){
          this.router.navigate(['/rh']);

        }else{
          console.log("verify your activation ")
        }


      },
      error: (err: any) => {
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
