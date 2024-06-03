import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSkillComponent } from './update-skill.component';

const routes: Routes = [
  {path:"",component:UpdateSkillComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSkillRoutingModule { }
