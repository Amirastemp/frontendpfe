import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-rhdetails',
  templateUrl: './rhdetails.component.html',
  styleUrls: ['./rhdetails.component.css']
})
export class RhdetailsComponent  implements OnInit{
  
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