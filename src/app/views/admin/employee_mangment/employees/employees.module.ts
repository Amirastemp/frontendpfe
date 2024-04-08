import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
