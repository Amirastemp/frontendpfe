import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  users:any = []
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getUsers()
      .subscribe(
        res => this.users = res,
        err => console.log(err)
      )
  }
  details(){

  }


}
