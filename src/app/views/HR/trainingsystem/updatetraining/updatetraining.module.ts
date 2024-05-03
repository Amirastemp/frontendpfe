import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatetrainingRoutingModule } from './updatetraining-routing.module';
import { UpdatetrainingComponent } from './updatetraining.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdatetrainingComponent
  ],
  imports: [
    CommonModule,
    UpdatetrainingRoutingModule,
    FormsModule
  ]
})
export class UpdatetrainingModule { }
