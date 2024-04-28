import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatProfileComponent } from './candidat-profile.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';

const routes: Routes = [
  {path:"",component:CandidatProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatProfileRoutingModule { }
