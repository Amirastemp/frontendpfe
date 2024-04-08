import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhsComponent } from './rhs.component';

const routes: Routes = [
  {path:"",component:RhsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhsRoutingModule { }
