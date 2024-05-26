import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateprofileRoutingModule } from './updateprofile-routing.module';
import { UpdateprofileComponent } from '../updateprofile/updateprofile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateprofileComponent
  ],
  imports: [
    CommonModule,
    UpdateprofileRoutingModule,
    FormsModule
  ]
})
export class UpdateprofileModule { }
