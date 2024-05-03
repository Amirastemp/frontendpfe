import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/views/service/training.service';

@Component({
  selector: 'app-updatetraining',
  templateUrl: './updatetraining.component.html',
  styleUrls: ['./updatetraining.component.css']
})
export class UpdatetrainingComponent implements OnInit{
  trainingData:any={};
  trainingId='';
  constructor(private route:ActivatedRoute,private trainingService:TrainingService,private router:Router){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.trainingId = params['id']; // Récupérer l'ID de la publication d'emploi à partir des paramètres de l'URL
      console.log(this.trainingId);

    });
  }
  gettraining(): void {
    this.trainingService.gettraining(this.trainingId).subscribe((data: any) => {
      this.trainingData = data.schedule; // Affecter les données récupérées aux détails de la publication d'emploi
    });}
  onsubmit(){
    this.trainingService.updatetraining(this.trainingId,this.trainingData).subscribe((data:any)=>{
      console.log("update is successfully done!");
      this.router.navigate(['/rh/alltraining']);
    });
}
}
