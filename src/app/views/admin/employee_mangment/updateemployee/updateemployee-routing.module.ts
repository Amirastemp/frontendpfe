import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateemployeeComponent } from './updateemployee.component';

const routes: Routes = [
  {path:"",component:UpdateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateemployeeRoutingModule { }
