import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsjobpostComponent } from './detailsjobpost.component';

const routes: Routes = [
  {
    path:"",component:DetailsjobpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsjobpostRoutingModule { }
