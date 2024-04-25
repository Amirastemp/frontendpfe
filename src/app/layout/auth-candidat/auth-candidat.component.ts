import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthcandidatService } from 'src/app/views/service/authcandidat.service';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-auth-candidat',
  templateUrl: './auth-candidat.component.html',
  styleUrls: ['./auth-candidat.component.css']
})
export class AuthCandidatComponent implements OnInit {
  showLoginForm: boolean = false;
  registerUserData:any={};
  loginUserData:any={};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage='';
  constructor(private authcandidat:AuthcandidatService,private router:Router,private data:DataService){}
  ngOnInit(): void {
    window.sessionStorage.removeItem("user");
    window.localStorage.removeItem("Token");
  }
  onSubmit(): void {
    this.authcandidat.login(this.loginUserData).subscribe({
      next: (data:any) => {
        console.log('Login successful:', data);
        localStorage.setItem('Token',data.accessToken);
        this.data.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        if(data.role=="candidat" && data.active==true){
          this.router.navigate(['/candidat']);
        }console.log(`not candidat #${data.role}`)
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
  onRegister():void{
    this.authcandidat.register(this.registerUserData).subscribe({
      next: (data:any) => {
        console.log('register successful:', data);
        localStorage.setItem('Token',data.accessToken);
        this.data.saveUser(data);
          this.router.navigate(['/candidat']);
       
      },
      error: (err:any) => {
        if (err.status === 401) {
          this.errorMessage = 'email deja exist';
        } 
        }
      });
    };
    
  

  toggleForm(form: string) {
    if(form === 'login'){
    this.showLoginForm=true;
    }else if(form=="signup"){
     this.showLoginForm=false
    }
  }

}

