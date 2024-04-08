import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrequestComponent } from './addrequest.component';

const routes: Routes = [
  {path:"",component:AddrequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddrequestRoutingModule { }
