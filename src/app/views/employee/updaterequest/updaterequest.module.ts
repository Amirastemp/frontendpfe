import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdaterequestRoutingModule } from './updaterequest-routing.module';
import { UpdaterequestComponent } from './updaterequest.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdaterequestComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UpdaterequestRoutingModule
  ]
})
export class UpdaterequestModule { }
