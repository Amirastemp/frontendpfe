import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdaterequestComponent } from './updaterequest.component';

const routes: Routes = [
  {path:"",component:UpdaterequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdaterequestRoutingModule { }
