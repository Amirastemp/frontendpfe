import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // Correction de l'import
import timeGridPlugin from '@fullcalendar/timegrid';
import { forkJoin, Observable } from 'rxjs';
import { CongéService } from '../../service/congé.service';
import { AuthemployeeService } from '../../service/authemployee.service';
import { DataService } from '../../service/data.service';
import listPlugin from '@fullcalendar/list';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [resourceTimelinePlugin],
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear'
    },
    initialView: 'resourceTimelineDay',
  
    views: {
      resourceTimelineDay:{
        slotMinTime: '08:00', // Début de la journée
        slotMaxTime: '18:00'
      },
      resourceTimelineWeek: {
        columnHeaderFormat: { weekday: 'long' },// Affiche les jours de la semaine complets
          slotDuration: { days: 1 },
          slotLabelFormat: { weekday: 'long' } ,
          businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [ 1, 2, 3, 4 ,5], // Monday - Thursday
          
            startTime: '10:00', // a start time (10am in this example)
            endTime: '18:00', // an end time (6pm in this example)
          }
    
      },
      resourceTimelineMonth: {
        columnHeaderFormat: {
          month: 'long', // Display full month names
          year: 'numeric' // Display year
        },},
      resourceTimelineYear: {
        dayHeaderFormat: { year: 'numeric' }, // Affiche l'année dans la première ligne
        monthHeaderFormat: { month: 'short' } // Affiche le nom abrégé du mois dans la deuxième ligne
      },},
    editable: true,
    resourceAreaHeaderContent: 'Employees',
    resources: [],
    events: []
  };
  

  constructor(private changeDetector: ChangeDetectorRef,private conge : CongéService, private auth:AuthemployeeService , private datas:DataService ) {
  }
  ngOnInit(): void {
    
    this.auth.request().subscribe(
      (data: any[]) => {
        const observables = data.map((item: any) => this.datas.getUserById(item.id_emp));
  
        forkJoin(observables).subscribe(
          (users: any[]) => {
            this.calendarOptions.resources = users.map(user => ({
              id:user._id , 
              title: user.userName
            })
            );
  
            this.calendarOptions.events = data.map(item => {
  
              return {
                resourceId: item.id_emp,
                start: item.startDate,
                end: item.endDate,
                title: item.cause,
                color:this.getColor(item.cause),
                
                
              };
            });
  
            this.changeDetector.detectChanges();
            console.log(this.calendarOptions.resources );
            console.log(this.calendarOptions.events);
          },
          (error: any) => console.error('Failed to fetch users:', error)
        );
      },
      (error: any) => console.error('Failed to fetch data:', error)
    );
  }
  getCalendarClass() {
    const today = new Date().getDay(); // Jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    return today === 0 || today === 6 ? 'calendar-non-working-days' : 'calendar-working-days';
  }
  getColor(item:string){
    if(item=='vacance'){
      return'pink'
    }else if(item=='maladie'){
      return 'green'
    }return 'yellow'
  }
  
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  


}
