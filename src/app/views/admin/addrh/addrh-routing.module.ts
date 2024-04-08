import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrhComponent } from './addrh.component';

const routes: Routes = [
  {path:"",component:AddrhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddrhRoutingModule { }
