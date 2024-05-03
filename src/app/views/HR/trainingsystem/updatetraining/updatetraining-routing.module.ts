import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatetrainingComponent } from './updatetraining.component';

const routes: Routes = [
  {path:"",component:UpdatetrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatetrainingRoutingModule { }
