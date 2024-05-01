import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsJobpostingComponent } from './details-jobposting.component';

const routes: Routes = [
  {path:"",component:DetailsJobpostingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsJobpostingRoutingModule { }
