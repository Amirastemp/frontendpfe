import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthcandidatService } from 'src/app/views/service/authcandidat.service';
import { DataService } from 'src/app/views/service/data.service';
import { JobserviceService } from 'src/app/views/service/jobservice.service';
import { SocketServiceService } from 'src/app/views/service/socket-service.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})export class CandidatureComponent implements OnInit {
  showHoverMessage: boolean = false;
  hoverMessage: string = '';
  applications: any = [];
  candidatinfo: any = {};
  jobpost: any = {};
  candidat:any={};
  constructor(private jobservice: JobserviceService, private authcandidat: AuthcandidatService,
    private datas:DataService,private el: ElementRef,private socketService:SocketServiceService) { }

  ngOnInit(): void {
    this.getAllApplications();
  }

  getAllApplications() {
    this.jobservice.getallapplications().subscribe((data: any) => {
      this.applications = data.jobApplication;
      console.log("applications:",this.applications);
      // Itération sur chaque candidature pour obtenir les détails du job post et du candidat
      this.applications.forEach((application: any) => {
        const jobPostId = application.jobPost; // Récupérer l'ID du job post
        const candidatId = application.candidate; // Récupérer l'ID du candidat
        // Appeler les méthodes pour obtenir les détails du job post et du candidat
        this.getJobPost(jobPostId);
        this.getCandidat(candidatId);
      });
    });
  }

  getJobPost(jobPostId: string) {
    this.jobservice.getJobPostDetails(jobPostId).subscribe((job: any) => {
      this.jobpost = job; // Stocker les détails du job post dans un objet avec l'ID comme clé
      console.log(job);
    });
  }
  getCandidat(candidatId: string) {
    this.authcandidat.getcandidatbyid(candidatId).subscribe((candidat: any) => {
      console.log(candidat);
      this.candidat=candidat;
      this.datas.getUserById(candidat.user).subscribe((data:any)=>{
        this.candidatinfo=data  // Stocker les détails du candidat dans un objet avec l'ID comme clé
        console.log(this.candidatinfo);
      })
    });
  }
  approved(item: any): void {
    // Mettre à jour le statut de la demande en 'Approved'
    item.status = 'Approved';
    this.updateRequestStatus(item);
    this.socketService.emitNewRequest(item);
  }

  rejected(item: any): void {
    // Mettre à jour le statut de la demande en 'Rejected'
    item.status = 'Rejected';
    this.updateRequestStatus(item);
    this.socketService.emitNewRequest(item);
  }

  // Méthode pour mettre à jour le statut de la demande dans la base de données
  updateRequestStatus(item: any): void {
    this.jobservice.updatejobapplication(item._id,item).subscribe(
      (response: any) => {
        console.log('Request status updated successfully:', response);
        // Vous pouvez effectuer d'autres actions ici après la mise à jour réussie
      },
      (error: any) => {
        console.error('Error updating request status:', error);
        // Gérer les erreurs ici
      }
    );
  }


}



