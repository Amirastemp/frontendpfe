import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingdetailsComponent } from './trainingdetails.component';

const routes: Routes = [
  {path:"",component:TrainingdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingdetailsRoutingModule { }
