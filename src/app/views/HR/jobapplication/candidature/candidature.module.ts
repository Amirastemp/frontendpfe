import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatureRoutingModule } from './candidature-routing.module';
import { CandidatureComponent } from './candidature.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidatureComponent
  ],
  imports: [
    CommonModule,
    CandidatureRoutingModule,
    FormsModule
  ]
})
export class CandidatureModule { }
