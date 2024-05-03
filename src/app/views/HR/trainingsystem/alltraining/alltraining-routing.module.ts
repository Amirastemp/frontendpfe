import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltrainingComponent } from './alltraining.component';

const routes: Routes = [
  {path:"",component:AlltrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlltrainingRoutingModule { }
