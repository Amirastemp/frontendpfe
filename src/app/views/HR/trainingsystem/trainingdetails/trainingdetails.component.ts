import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/views/service/training.service';

@Component({
  selector: 'app-trainingdetails',
  templateUrl: './trainingdetails.component.html',
  styleUrls: ['./trainingdetails.component.css']
})
export class TrainingdetailsComponent implements OnInit{
  trainingData:any={};
  trainingId='';
  constructor(private route:ActivatedRoute,private trainingService:TrainingService,private router:Router){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.trainingId = params['id']; // Récupérer l'ID de la publication d'emploi à partir des paramètres de l'URL
      console.log(this.trainingId);
     this.gettraining();
    });
  }
  gettraining(): void {
    this.trainingService.gettraining(this.trainingId).subscribe((data: any) => {
      console.log(data);
      this.trainingData = data.training; // Affecter les données récupérées aux détails de la publication d'emploi
    });}

}
