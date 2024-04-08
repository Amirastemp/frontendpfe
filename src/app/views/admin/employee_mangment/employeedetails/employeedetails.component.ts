import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit{

  id: any;
  dataObject: any;
  messageErr: string = '';

  constructor(private route: ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.ds.getUserById(this.id).subscribe(
        (response) => {
          this.dataObject = response;
          console.log(this.dataObject);
        },
        (err) => {
          console.log(err);
          this.messageErr = "The User is not registered in the database";
        }
      );
    });
  }
}
