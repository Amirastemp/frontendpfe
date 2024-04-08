import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CongéService } from '../../service/congé.service';
import { AuthemployeeService } from '../../service/authemployee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-updaterequest',
  templateUrl: './updaterequest.component.html',
  styleUrls: ['./updaterequest.component.css']
})
export class UpdaterequestComponent implements OnInit{
  id!: string;
  errorMessage = '';

  isSuccessful = false;
  isFailed = false;
  requestData:any={}
  constructor(
    private route: ActivatedRoute,
    private congeservice:CongéService,
    private auth:AuthemployeeService
  ) {}
  ngOnInit(): void {
    console.log("hello");
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.auth.getrequestbyId(this.id,).subscribe(
        (response) => {
          this.requestData = response;
          console.log(this.requestData);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  updateNewRequest(formData: any): void {
    this.requestData = formData.value;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('Request ID:', this.id);

      this.congeservice.updaterequest(this.id, this.requestData).subscribe(
        (response: any) => {
          console.log('Update response:', response);
          // Handle response as needed
          this.isSuccessful = true;
          this.isFailed = false;
        },
        (error: HttpErrorResponse) => {
          this.isSuccessful = false;
          this.isFailed = true;
          console.error('Update error:', error.message);
          // Handle error as needed
        }
      );
    });
  }
}
{

}
