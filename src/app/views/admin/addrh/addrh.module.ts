import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrhRoutingModule } from './addrh-routing.module';
import { AddrhComponent } from './addrh.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddrhComponent
  ],
  imports: [
    CommonModule,
    AddrhRoutingModule,
    FormsModule
  ]
})
export class AddrhModule { }
