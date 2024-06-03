import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfComponent } from './update-prof.component';

const routes: Routes = [
  {path:"",component:UpdateProfComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProfRoutingModule { }
