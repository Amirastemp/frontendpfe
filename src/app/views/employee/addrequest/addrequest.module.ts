import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrequestRoutingModule } from './addrequest-routing.module';
import { AddrequestComponent } from './addrequest.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddrequestComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AddrequestRoutingModule
  ]
})
export class AddrequestModule { }
