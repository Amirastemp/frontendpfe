import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../../service/authadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrh',
  templateUrl: './addrh.component.html',
  styleUrls: ['./addrh.component.css']
})
export class AddrhComponent implements OnInit{
  registerUserData: any = {};
  errorMessage = '';

  isSuccessful = false;
  isSignUpFailed = false;
  ngOnInit(): void {
   
    }


  constructor(private _auth: AuthadminService,private _router:Router) { }


  onSubmit(): void {
    const { firstName, lastName, userName, email, password, phone, active} = this.registerUserData;
  
    // Check if the checkbox is checked or unchecked
    const isActivated = active; // true if checked, false if unchecked

    this._auth.registerRH({ firstName, lastName, userName, email, password, phone, active: isActivated }).subscribe({
    
      next: (data: any) => {
        console.log(active)
        console.log('Response:', data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this._router.navigate(['/admin/rhs']);
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


