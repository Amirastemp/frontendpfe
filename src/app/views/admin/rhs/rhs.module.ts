import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhsRoutingModule } from './rhs-routing.module';
import { RhsComponent } from './rhs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RhsComponent
  ],
  imports: [
    CommonModule,
    RhsRoutingModule,
    FormsModule
  ]
})
export class RhsModule { }
