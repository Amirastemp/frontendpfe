import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/views/service/training.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{

  isSuccessful=false;
scheduleData:any={};
constructor(private trainingservice:TrainingService){}
ngOnInit(): void {

}
onSubmit(){
  this.trainingservice.addSchedule(this.scheduleData).subscribe((data:any)=>{
    console.log("addition successfully!");
  })

}
}
