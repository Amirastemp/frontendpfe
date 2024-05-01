import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/views/service/jobservice.service';

@Component({
  selector: 'app-details-jobposting',
  templateUrl: './details-jobposting.component.html',
  styleUrls: ['./details-jobposting.component.css']
})
export class DetailsJobpostingComponent implements OnInit {
  jobPostId: string='';
  jobPostDetails: any={}; // Définir le type de données pour les détails de la publication d'emploi

  constructor(private route: ActivatedRoute, private jobPostService: JobserviceService,private router : Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobPostId = params['id']; // Récupérer l'ID de la publication d'emploi à partir des paramètres de l'URL
      console.log(this.jobPostId);
      this.getJobPostDetails(); // Appeler la fonction pour récupérer les détails de la publication d'emploi
    });
  }

  getJobPostDetails(): void {
    this.jobPostService.getJobPostDetails(this.jobPostId).subscribe((data: any) => {
      this.jobPostDetails = data.data; // Affecter les données récupérées aux détails de la publication d'emploi
    });
  }
  postuler(f:string) {
    this.router.navigate(['/candidat/jobapplication'], { queryParams: { id: f} });
  }
}
