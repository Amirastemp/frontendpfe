import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarLayoutComponent } from './layout/navbar-layout/navbar-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminComponent } from './layout/auth-admin/auth-admin.component';
import { RHLayoutComponent } from './layout/rh-layout/rh-layout.component';
import { AuthRhComponent } from './layout/auth-rh/auth-rh.component';
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { AuthEmployeeComponent } from './layout/auth-employee/auth-employee.component';
import { AuthCandidatComponent } from './layout/auth-candidat/auth-candidat.component';
import { CandidatLayoutComponent } from './layout/candidat-layout/candidat-layout.component';



const routes: Routes = [
      { path: 'config', loadChildren: () => import('./views/config/config.module').then(m => m.ConfigModule) },
      { path: 'navbar', component: NavbarLayoutComponent },
      { path: 'footer', component: FooterLayoutComponent },
      { path: '', component: UserLayoutComponent, children: [
        { path: '', loadChildren: () => import('./views/user/home/home.module').then(m => m.HomeModule) },
        { path: 'employees', loadChildren: () => import('./views/user/employees/employees.module').then(m => m.EmployeesModule) },
        { path: 'contact', loadChildren: () => import('./views/user/contact/contact.module').then(m => m.ContactModule) },
        { path: 'about-us', loadChildren: () => import('./views/user/about-us/about-us.module').then(m => m.AboutUsModule) },
       
      ]},
      {path:"admin",component:AdminLayoutComponent,children:[
        {path:"dashboard",loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:"rhs",loadChildren:()=>import('./views/admin/rhs/rhs.module').then(m=>m.RhsModule)},
        {path:"addrh",loadChildren:()=>import('./views/admin/addrh/addrh.module').then(m=>m.AddrhModule)},
        {path:"rhdetails/:id",loadChildren:()=>import('./views/admin/rhdetails/rhdetails.module').then(m=>m.RhdetailsModule)},
        {path:"update-rh/:id",loadChildren:()=>import('./views/admin/update-rh/update-rh.module').then(m=>m.UpdateRHModule)},
        {path:"employees",loadChildren:()=>import('./views/admin/employee_mangment/employees/employees.module').then(m=>m.EmployeesModule)},
        {path:"addemployee",loadChildren:()=>import('./views/admin/employee_mangment/addemployee/addemployee.module').then(m=>m.AddemployeeModule)},
        {path:"employeedetails/:id",loadChildren:()=>import('./views/admin/employee_mangment/employeedetails/employeedetails.module').then(m=>m.EmployeedetailsModule)},
        {path:"updateemployee/:id",loadChildren:()=>import('./views/admin/employee_mangment/updateemployee/updateemployee.module').then(m=>m.UpdateemployeeModule)},
     
        {path:"profile",loadChildren:()=>import('./views/employee/profile/profile.module').then(m=>m.ProfileModule)},
        {path:"updateprofile",loadChildren:()=>import('./views/employee/updateprofile/updateprofile.module').then(m=>m.UpdateprofileModule)},
      ]},
      {path:"admin/login",component:AuthAdminComponent},

      {path:"rh",component:RHLayoutComponent,children:[
        {path:"dashboard",loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:"employees",loadChildren:()=>import('./views/admin/employee_mangment/employees/employees.module').then(m=>m.EmployeesModule)},
        {path:"employees/:id",loadChildren:()=>import('./views/admin/employee_mangment/employees/employees.module').then(m=>m.EmployeesModule)},
        {path:"addemployee",loadChildren:()=>import('./views/admin/employee_mangment/addemployee/addemployee.module').then(m=>m.AddemployeeModule)},
        {path:"employeedetails/:id",loadChildren:()=>import('./views/admin/employee_mangment/employeedetails/employeedetails.module').then(m=>m.EmployeedetailsModule)},
        {path:"updateemployee/:id",loadChildren:()=>import('./views/admin/employee_mangment/updateemployee/updateemployee.module').then(m=>m.UpdateemployeeModule)},

        {path:"requests",loadChildren:()=>import('./views/HR/requests/requests.module').then(m=>m.RequestsModule)},
       {path:"planning",loadChildren:()=>import('./views/HR/planning/planning.module').then(m=>m.PlanningModule)},

       {path:"addjobPost",loadChildren:()=>import('./views/HR/jobpostsystem/addjobpost/addjobpost.module').then(m=>m.AddjobpostModule)},
        {path:"jobPostdetails",loadChildren:()=>import('./views/HR/jobpostsystem/detailsjobpost/detailsjobpost.module').then(m=>m.DetailsjobpostModule)},
        {path:"updatejobPost",loadChildren:()=>import('./views/HR/jobpostsystem/updatejobpost/updatejobpost.module').then(m=>m.UpdatejobpostModule)},
        {path:"alljobPost",loadChildren:()=>import('./views/HR/jobpostsystem/alljobpost/alljobpost.module').then(m=>m.AlljobpostModule)},
        {path:"candidacy",loadChildren:()=>import('./views/HR/jobapplication/candidature/candidature.module').then(m=>m.CandidatureModule)},


        {path:"schedule",loadChildren:()=>import('./views/HR/trainingsystem/schedule/schedule.module').then(m=>m.ScheduleModule)},
        {path:"updatetraining",loadChildren:()=>import('./views/HR/trainingsystem/updatetraining/updatetraining.module').then(m=>m.UpdatetrainingModule)},
        {path:"alltraining",loadChildren:()=>import('./views/HR/trainingsystem/alltraining/alltraining.module').then(m=>m.AlltrainingModule)},
        {path:"trainingdetails",loadChildren:()=>import('./views/HR/trainingsystem/trainingdetails/trainingdetails.module').then(m=>m.TrainingdetailsModule)},

        {path:"profile",loadChildren:()=>import('./views/employee/profile/profile.module').then(m=>m.ProfileModule)},
        {path:"updateprofile",loadChildren:()=>import('./views/employee/updateprofile/updateprofile.module').then(m=>m.UpdateprofileModule)},
      ]},
      {path:"rh/login",component:AuthRhComponent},

      {path:"employee",component:EmployeeLayoutComponent,children:[
        {path:"dashboard",loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:"requests",loadChildren:()=>import('./views/employee/request/request.module').then(m=>m.RequestModule)},
        {path:"addrequest",loadChildren:()=>import('./views/employee/addrequest/addrequest.module').then(m=>m.AddrequestModule)},
        {path:"updaterequest/:id",loadChildren:()=>import('./views/employee/updaterequest/updaterequest.module').then(m=>m.UpdaterequestModule)},
        
        {path:"profile",loadChildren:()=>import('./views/employee/profile/profile.module').then(m=>m.ProfileModule)},
        {path:"updateprofile",loadChildren:()=>import('./views/employee/updateprofile/updateprofile.module').then(m=>m.UpdateprofileModule)},
      ]},
      {path:"employee/login",component:AuthEmployeeComponent},

      {path:"candidat",component:CandidatLayoutComponent,children:[
        {path:"dashboard",loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:"profile",loadChildren:()=>import('./views/candidat/candidat-profile/candidat-profile.module').then(m=>m.CandidatProfileModule)},
        {path:"updateprofile",loadChildren:()=>import('./views/candidat/update-profile/update-profile.module').then(m=>m.UpdateProfileModule)},
        {path:"jobapplication",loadChildren:()=>import('./views/candidat/recrutement/jobapplication/jobapplication.module').then(m=>m.JobapplicationModule)},
        {path:"jobposting",loadChildren:()=>import('./views/candidat/recrutement/jobposting/jobposting.module').then(m=>m.JobpostingModule)},
        {path:"jobPostingdetails",loadChildren:()=>import('./views/candidat/recrutement/details-jobposting/details-jobposting.module').then(m=>m.DetailsJobpostingModule)},

        {path:"updateskill",loadChildren:()=>import('./views/candidat/update-skill/update-skill.module').then(m=>m.UpdateSkillModule)},
        {path:"updateprof",loadChildren:()=>import('./views/candidat/update-prof/update-prof.module').then(m=>m.UpdateProfModule)},
        {path:"updateacademic",loadChildren:()=>import('./views/candidat/update-academic/update-academic.module').then(m=>m.UpdateAcademicModule)},

    ]}, {path:"candidat/connected",component:AuthCandidatComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
