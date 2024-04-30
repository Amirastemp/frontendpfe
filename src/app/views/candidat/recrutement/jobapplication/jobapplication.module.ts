import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobapplicationRoutingModule } from './jobapplication-routing.module';
import { JobapplicationComponent } from './jobapplication.component';


@NgModule({
  declarations: [
    JobapplicationComponent
  ],
  imports: [
    CommonModule,
    JobapplicationRoutingModule
  ]
})
export class JobapplicationModule { }
