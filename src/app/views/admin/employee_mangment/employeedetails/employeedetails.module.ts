import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeedetailsRoutingModule } from './employeedetails-routing.module';
import { EmployeedetailsComponent } from './employeedetails.component';


@NgModule({
  declarations: [
    EmployeedetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeedetailsRoutingModule
  ]
})
export class EmployeedetailsModule { }
