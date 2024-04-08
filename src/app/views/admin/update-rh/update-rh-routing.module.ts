import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateRHComponent } from './update-rh.component';

const routes: Routes = [
   {path:"",component:UpdateRHComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRHRoutingModule { }
