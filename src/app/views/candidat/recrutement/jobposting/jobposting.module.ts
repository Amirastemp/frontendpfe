import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobpostingRoutingModule } from './jobposting-routing.module';
import { JobpostingComponent } from './jobposting.component';


@NgModule({
  declarations: [
    JobpostingComponent
  ],
  imports: [
    CommonModule,
    JobpostingRoutingModule
  ]
})
export class JobpostingModule { }
