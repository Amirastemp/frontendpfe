import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/views/service/jobservice.service';
import { SocketServiceService } from 'src/app/views/service/socket-service.service';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent implements OnInit {
  jobapp:any={}
  jobapplicationId='';
  constructor(private route: ActivatedRoute, private jobService: JobserviceService,private router : Router,private socketService:SocketServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobapplicationId = params['id']; // Récupérer l'ID de la publication d'emploi à partir des paramètres de l'URL
      console.log(this.jobapplicationId);
       });
  }
  submitJobApplication(){
    this.jobService.addjobapplication(this.jobapp).subscribe((data:any)=>{
      this.jobapp=data;
      this.socketService.emitNewRequest(data);
      console.log(this.jobapp);
    })
  }
  handleFileInput(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (fileType === 'cvFile') {
        this.jobapp.cvFile = file;
      }
    }
  }
}
