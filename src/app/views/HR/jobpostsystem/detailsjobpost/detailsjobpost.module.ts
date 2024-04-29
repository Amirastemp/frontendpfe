import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsjobpostRoutingModule } from './detailsjobpost-routing.module';
import { DetailsjobpostComponent } from './detailsjobpost.component';


@NgModule({
  declarations: [
    DetailsjobpostComponent
  ],
  imports: [
    CommonModule,
    DetailsjobpostRoutingModule
  ]
})
export class DetailsjobpostModule { }
