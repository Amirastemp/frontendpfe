import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobpostingComponent } from './jobposting.component';

const routes: Routes = [
  {path:"",component:JobpostingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobpostingRoutingModule { }
