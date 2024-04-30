import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobapplicationComponent } from './jobapplication.component';

const routes: Routes = [
  {path:"",component:JobapplicationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobapplicationRoutingModule { }
