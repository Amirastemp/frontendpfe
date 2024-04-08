import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-rh',
  templateUrl: './update-rh.component.html',
  styleUrls: ['./update-rh.component.css']
})
export class UpdateRHComponent implements OnInit{
  id!: string;
  errorMessage = '';

  isSuccessful = false;
  isSignUpFailed = false;
 userdata:any={}
  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.dataservice.getUserById(this.id).subscribe(
        (response) => {
          this.userdata = response;
          console.log(this.userdata);
        },
        (err) => {
          console.log(err);

        }
      );
    });
  }

  updateNewUser(formData: any): void {
    this.userdata = formData.value;

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('User ID:', this.id);

      this.dataservice.updateuser(this.id, this.userdata).subscribe(
        (response: any) => {
          console.log('Update response:', response);
          // Handle response as needed
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (error: HttpErrorResponse) => {
          this.isSuccessful = false;
          this.isSignUpFailed = true;
          console.error('Update error:', error.message);
          // Handle error as needed
        }
      );
    });
  }
}
