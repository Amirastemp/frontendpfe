import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateemployeeRoutingModule } from './updateemployee-routing.module';
import { UpdateemployeeComponent } from './updateemployee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateemployeeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UpdateemployeeRoutingModule
  ]
})
export class UpdateemployeeModule { }
