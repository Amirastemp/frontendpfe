import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/views/service/jobservice.service';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent implements OnInit {
  jobapp:any={}
  jobapplicationId='';
  constructor(private route: ActivatedRoute, private jobService: JobserviceService,private router : Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobapplicationId = params['id']; // Récupérer l'ID de la publication d'emploi à partir des paramètres de l'URL
      console.log(this.jobapplicationId);
       });
  }
  submitJobApplication(){
    this.jobService.addjobapplication(this.jobapp).subscribe((data:any)=>{
      this.jobapp=data;
      console.log(this.jobapp);
    })
  }
}
