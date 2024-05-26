import { formatDate } from '@angular/common';
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
        if(data.role=="candidat" ){
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
  handleFileInput(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const image = input.files[0];
      if (fileType === 'image') {
        this.registerUserData.image = image;
      }
    }
  }
  onRegister():void{
    const formData = new FormData();
    formData.append('email', this.registerUserData.email);
    formData.append('password', this.registerUserData.password);
    formData.append('firstName', this.registerUserData.firstName);
    formData.append('lastName', this.registerUserData.lastName);
    formData.append('userName', this.registerUserData.userName);
    formData.append('description', this.registerUserData.description);
    formData.append('phone', this.registerUserData.phone.toString());
    formData.append('address', this.registerUserData.address);
    if (this.registerUserData.image) {
      formData.append('image', this.registerUserData.image);
    }
    this.authcandidat.register(formData).subscribe({
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

