import { CUSTOM_ELEMENTS_SCHEMA, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from './views/user/home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthadminService } from './views/service/authadmin.service';
import { UpdateRHComponent } from './views/admin/update-rh/update-rh.component';
import { AuthemployeeService } from './views/service/authemployee.service';
import { AuthrhService } from './views/service/authrh.service';
import { CongéService } from './views/service/congé.service';
import { DataService } from './views/service/data.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketServiceService } from './views/service/socket-service.service';
import { CandidatProfileComponent } from './views/candidat/candidat-profile/candidat-profile.component';
import { UpdateProfileComponent } from './views/candidat/update-profile/update-profile.component';
import { AddjobpostComponent } from './views/HR/jobpostsystem/addjobpost/addjobpost.component';
import { UpdatejobpostComponent } from './views/HR/jobpostsystem/updatejobpost/updatejobpost.component';
import { AlljobpostComponent } from './views/HR/jobpostsystem/alljobpost/alljobpost.component';
import { DetailsJobpostingComponent } from './views/candidat/recrutement/details-jobposting/details-jobposting.component';
import { UpdateSkillComponent } from './views/candidat/update-skill/update-skill.component';
import { UpdateAcademicComponent } from './views/candidat/update-academic/update-academic.component';
import { UpdateProfComponent } from './views/candidat/update-prof/update-prof.component';
import { ConfigComponent } from './views/config/config.component';
import { ConfigModule } from './views/config/config.module';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UpdateRHComponent,
    CandidatProfileComponent,
    UpdateProfileComponent,
    AddjobpostComponent,
    UpdatejobpostComponent,
    AlljobpostComponent,
    DetailsJobpostingComponent,
    UpdateSkillComponent,
    UpdateAcademicComponent,
    UpdateProfComponent,
   ConfigComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    HomeModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    


  ],
  providers: [AuthadminService,AuthemployeeService,AuthrhService,CongéService,DataService,SocketServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
