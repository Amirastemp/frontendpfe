import { Component, OnInit } from '@angular/core';
import { AuthemployeeService } from '../../service/authemployee.service';
import { AuthadminService } from '../../service/authadmin.service';
import { DataService } from '../../service/data.service';
import { forkJoin } from 'rxjs';
import { cU } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  calendarVisible = true;
  calendarOptions: any = {  // Change type to any
    resources: [],
    events: [],
    weekends: true
  };
  currentMonth: string; // Modifier le type en string

  currentYear: number;
  calendarDays: { date: number; isOtherMonth: boolean; events: any[] }[][] = [];

  userId = '';

constructor(private auth: AuthemployeeService, private _auth: AuthadminService, private datas: DataService)
{
  const today = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  this.currentMonth = monthNames[today.getMonth()];
  const month = this.getMonthIndex(this.currentMonth);
  this.currentYear = today.getFullYear();
  this.generateCalendar(this.currentYear, month);
}

  setCurrentMonth() {
    const today = new Date();
    this.currentMonth = this.getMonthName(today.getMonth());
  }

  getEventsForEmployeeAndDay(employeeId: number, date: Date): any[] {
    // Filtrer les événements pour l'employé spécifié
    const employeeEvents = this.calendarOptions.events.filter((event:any) => event.resourceId === employeeId);

    // Filtrer les événements pour le jour spécifié
    const eventsForDay = employeeEvents.filter((event:any) => {
      const eventStartDate = new Date(event.start);
      const eventEndDate = new Date(event.end);
      // Vérifier si le jour est inclus dans la plage de dates de l'événement
      return date >= eventStartDate && date <= eventEndDate;
    });
    return eventsForDay;
  }
  hasEventsForEmployeeAndDay(employeeId: number, date: Date): boolean {
    // Filter events for the specified employee and date
    const events = this.calendarOptions.events.filter((event: any) => {
      // Convert event start date to a Date object
      const eventStartDate = new Date(event.start);
      // Check if the event is for the specified employee and date
      return event.resourceId === employeeId && eventStartDate.getDate() === date.getDate();
    });
    // Return true if there are events for the employee and date, otherwise return false
    return events.length > 0;
  }


// Définissez la propriété dayOfWeek pour chaque jour dans calendarDays
calculateDayOfWeek(date: Date): string {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
}


  ngOnInit(): void {
    this.auth.request().subscribe(
      (data: any[]) => {
        const observables = data.map((item: any) => {
          return this.datas.getUserById(item.id_emp);
        });

        forkJoin(observables).subscribe(
          (users: any[]) => {
            // Set resources with employee data
            this.calendarOptions.resources = users.map(user => {
              return {
                id: user._id,
                UserName: user.userName
              };
            });

            // Set events with employee events
            this.calendarOptions.events = data.map(item => {
              const diffInMs = new Date(item.endDate).getTime() - new Date(item.startDate).getTime();

                  // Convertir la différence en jours
                const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
              return {
                resourceId: item.id_emp,
                start: item.startDate,
                end: item.endDate,
                title: item.cause,
                duree: `${diffInDays} days`
              };
            });
            console.log(this.calendarOptions.resources);
            console.log(this.calendarOptions.events);
          },

          (error: any) => {
            console.error('Failed to fetch users:', error);
          }
        );
      },
      (error: any) => {
        console.error('Failed to fetch data:', error);
      }
    );

  }
  getEventsForDay(date: number): any[] {
    return this.calendarOptions.events.filter((event:any) => {
      const eventDate = new Date(event.start).getDate();
      return eventDate === date;
    });
  }
  getEventColor(date: Date, workerId: string): string {
    const events = this.calendarOptions.events.filter((event:any) => event.resourceId === workerId && new Date(event.start).getDate() === date.getDate());
    const hasSickLeave = events.some((event:any) => event.title === 'maladie');
    const hasVacation = events.some((event:any) => event.title === 'vacance');

    if (hasSickLeave) {
      return 'sick-leave';
    } else if (hasVacation) {
      return 'vacation';
    } else {
      return '';
    }
  }

// Fonction pour vérifier si une date est comprise dans la période d'un événement
isDayInEvent(date: number, employeeId: number): boolean {
  // Obtenez le mois et l'année actuels
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Vérifiez si la date est dans un événement de congé pour l'employé en cours et dans le mois en cours
  return this.calendarOptions.events.some((event: any) => {
    const eventStartDate = new Date(event.start);
    const eventEndDate = new Date(event.end);
    const eventMonth = eventStartDate.getMonth();
    const eventYear = eventStartDate.getFullYear();
    const isSameMonthAndYear = currentMonth === eventMonth && currentYear === eventYear;

    return (
      date >= eventStartDate.getDate() && date <= eventEndDate.getDate() &&
      isSameMonthAndYear && event.resourceId === employeeId
    );
  });
}




getEmployeeNameForEvent(date: number): string {
  // Trouvez le nom de l'employé associé à l'événement de congé
  const event = this.calendarOptions.events.find((event: any) => {
    const eventStartDate = new Date(event.start).getDate();
    return date === eventStartDate;
  });
  return event ? event.title : '';
}



  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  generateCalendar(year: number, month: number) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const prevMonthLastDate = new Date(year, month, 0).getDate();

    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)
    const endDayOfMonth = lastDayOfMonth.getDate();

    let date = 1;
    this.calendarDays = [];
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDayOfWeek) {
          // Previous month's days
          const prevMonthDay = prevMonthLastDate - startDayOfWeek + j + 1;
          week.push({ date: prevMonthDay, isOtherMonth: true, events: [] });
        } else if (date > endDayOfMonth) {
          // Next month's days
          week.push({ date: date - endDayOfMonth, isOtherMonth: true, events: [] });
          date++;
        } else {
          // Current month's days
          week.push({ date: date, isOtherMonth: false, events: [] });
          date++;
        }
      }
      this.calendarDays.push(week);
    }
  }

  goToNextMonth() {
    const nextMonthIndex = this.getMonthIndex(this.currentMonth) + 1;
    if (nextMonthIndex === 12) {
      this.currentYear++;
      this.currentMonth = this.getMonthName(0);
    } else {
      this.currentMonth = this.getMonthName(nextMonthIndex);
    }
    this.generateCalendar(this.currentYear, nextMonthIndex);
  }

  goToPreviousMonth() {
    const prevMonthIndex = this.getMonthIndex(this.currentMonth) - 1;
    if (prevMonthIndex === -1) {
      this.currentYear--;
      this.currentMonth = this.getMonthName(11);
    } else {
      this.currentMonth = this.getMonthName(prevMonthIndex);
    }
    this.generateCalendar(this.currentYear, prevMonthIndex);
  }

  getMonthIndex(month: string): number {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames.indexOf(month);
  }

  getMonthName(index: number): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[index];
  }

}
