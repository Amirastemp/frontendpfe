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
  handleFileInput(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const image = input.files[0];
      if (fileType === 'image') {
        this.registerUserData.image = image;
      }
    }
  }
  
  onSubmit(): void {
    const formData = new FormData();
  
    // Append form fields to the FormData object
    formData.append('firstName', this.registerUserData.firstName);
    formData.append('lastName', this.registerUserData.lastName);
    formData.append('userName', this.registerUserData.userName);
    formData.append('description', this.registerUserData.description);
    formData.append('email', this.registerUserData.email);
    formData.append('password', this.registerUserData.password);
    formData.append('phone', this.registerUserData.phone.toString());
    formData.append('hiring_date', this.registerUserData.hiring_date.toString());
    formData.append('active', this.registerUserData.active.toString()); // Convert active to string
  
    if (this.registerUserData.image) {
      formData.append('image', this.registerUserData.image);
    }
  
    // Pass the FormData object to the registerRH method
    this._auth.registerRH(formData).subscribe({
      next: (data: any) => {
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


