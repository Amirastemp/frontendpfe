import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingdetailsRoutingModule } from './trainingdetails-routing.module';
import { TrainingdetailsComponent } from './trainingdetails.component';


@NgModule({
  declarations: [
    TrainingdetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingdetailsRoutingModule
  ]
})
export class TrainingdetailsModule { }
