import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RHLayoutComponent } from './rh-layout/rh-layout.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';
import { FormsModule } from '@angular/forms';
import { AuthEmployeeComponent } from './auth-employee/auth-employee.component';
import { AuthRhComponent } from './auth-rh/auth-rh.component';
import { CandidatLayoutComponent } from './candidat-layout/candidat-layout.component';
import { AuthCandidatComponent } from './auth-candidat/auth-candidat.component';



@NgModule({
  declarations: [
    FooterLayoutComponent,
    NavbarLayoutComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    RHLayoutComponent,
    EmployeeLayoutComponent,
    AuthAdminComponent,
    AuthEmployeeComponent,
    AuthRhComponent,
    CandidatLayoutComponent,
    AuthCandidatComponent
  ],
  exports: [
    FooterLayoutComponent,
    NavbarLayoutComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule
  ]
})
export class LayoutModule { }
