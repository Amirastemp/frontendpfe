import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from './views/user/home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthadminService } from './views/service/authadmin.service';
import { UpdateRHComponent } from './views/admin/update-rh/update-rh.component';
import { AuthemployeeService } from './views/service/authemployee.service';
import { AuthrhService } from './views/service/authrh.service';
import { CongéService } from './views/service/congé.service';
import { DataService } from './views/service/data.service';
import { FullCalendarModule } from '@fullcalendar/angular/full-calendar.module';

@NgModule({
  declarations: [
    AppComponent,
    UpdateRHComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    HomeModule,


  ],
  providers: [AuthadminService,AuthemployeeService,AuthrhService,CongéService,DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
