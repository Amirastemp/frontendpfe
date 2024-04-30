import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/views/service/jobservice.service';

@Component({
  selector: 'app-alljobpost',
  templateUrl: './alljobpost.component.html',
  styleUrls: ['./alljobpost.component.css']
})
export class AlljobpostComponent implements OnInit {
  jobs:any[]=[]
  constructor(private job:JobserviceService,private router:Router){}
ngOnInit(): void {
this.getalljobpost();

}
getalljobpost(){
  this.job.alljobpost().subscribe((data:any)=>{
    console.log(data);
    this.jobs=data.data;
});
}
navigateTodetails(f:string) {
  this.router.navigate(['/rh/jobPostdetails'], { queryParams: { id: f} });
}
navigateToUpdate(f:string) {
  this.router.navigate(['/rh/updatejobPost'], { queryParams: { id: f} });
}
deleteJob(f:string,i:number){
  this.job.deleteJobPost(f).subscribe((response:any) => {

    console.log(' supprimé avec succès', response);
    // Remove the item from the data array
    if (i !== -1) {
        this.jobs.splice(i, 1);
    }
  },(error:any) => {
    console.error('Erreur lors de la suppression ', error);
    // Handle the error here
}
)}
}

