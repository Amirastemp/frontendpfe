import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobapplicationRoutingModule } from './jobapplication-routing.module';
import { JobapplicationComponent } from './jobapplication.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobapplicationComponent
  ],
  imports: [
    CommonModule,
    JobapplicationRoutingModule,
    FormsModule
  ]
})
export class JobapplicationModule { }
