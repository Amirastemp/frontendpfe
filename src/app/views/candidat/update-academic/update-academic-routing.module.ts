import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAcademicComponent } from './update-academic.component';

const routes: Routes = [
  {path:"",component:UpdateAcademicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAcademicRoutingModule { }
