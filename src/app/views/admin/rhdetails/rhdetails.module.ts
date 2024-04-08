import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhdetailsRoutingModule } from './rhdetails-routing.module';
import { RhdetailsComponent } from '../rhdetails/rhdetails.component';


@NgModule({
  declarations: [
    RhdetailsComponent
  ],
  imports: [
    CommonModule,
    RhdetailsRoutingModule
  ]
})
export class RhdetailsModule { }
