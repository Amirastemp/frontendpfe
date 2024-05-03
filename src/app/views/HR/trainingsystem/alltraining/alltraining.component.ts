import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/views/service/training.service';

@Component({
  selector: 'app-alltraining',
  templateUrl: './alltraining.component.html',
  styleUrls: ['./alltraining.component.css']
})
export class AlltrainingComponent implements OnInit {
  trainingData:any[]=[]
  constructor(private trainingservice:TrainingService,private router:Router){}
  ngOnInit(): void {
  this.getalltraining();

  }
  getalltraining(){
    this.trainingservice.alltraining().subscribe((data:any)=>{
      console.log(data);
      this.trainingData=data.schedule;
  });
  }
  navigateTodetails(f:string) {
    this.router.navigate(['/rh/trainingdetails'], { queryParams: { id: f} });
  }
  navigateToUpdate(f:string) {
    this.router.navigate(['/rh/updatetraining'], { queryParams: { id: f} });
  }
  deletetraining(f:string,i:number){
    this.trainingservice.deletetraining(f).subscribe((response:any) => {

      console.log(' supprimé avec succès', response);
      // Remove the item from the data array
      if (i !== -1) {
          this.trainingData.splice(i, 1);
      }
    },(error:any) => {
      console.error('Erreur lors de la suppression ', error);
      // Handle the error here
  }
  )}
  }

