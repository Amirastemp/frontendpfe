import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobpostComponent } from './addjobpost.component';

const routes: Routes = [
  {
    path:"",component:AddjobpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddjobpostRoutingModule { }
