import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlltrainingRoutingModule } from './alltraining-routing.module';
import { AlltrainingComponent } from './alltraining.component';


@NgModule({
  declarations: [
    AlltrainingComponent
  ],
  imports: [
    CommonModule,
    AlltrainingRoutingModule
  ]
})
export class AlltrainingModule { }
