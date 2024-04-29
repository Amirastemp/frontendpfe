import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatejobpostComponent } from './updatejobpost.component';

const routes: Routes = [
  {
    path:"",component:UpdatejobpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatejobpostRoutingModule { }
