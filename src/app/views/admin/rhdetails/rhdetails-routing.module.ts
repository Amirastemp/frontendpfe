import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhdetailsComponent } from './rhdetails.component';

const routes: Routes = [
  {path:"",component:RhdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhdetailsRoutingModule { }
