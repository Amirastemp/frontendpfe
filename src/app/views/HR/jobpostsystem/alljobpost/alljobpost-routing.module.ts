import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobpostComponent } from './alljobpost.component';

const routes: Routes = [
  {
    path:"",component:AlljobpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlljobpostRoutingModule { }
