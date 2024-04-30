import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/views/service/jobservice.service';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent  implements OnInit {
  jobs:any[]=[]
  constructor(private job:JobserviceService,private router:Router){}
ngOnInit(): void {
this.getalljobpost();

}
getalljobpost(){
  this.job.openjobpost().subscribe((data:any)=>{
    console.log(data);
    this.jobs=data.data;
});
}
navigateTodetails(f:string) {
  this.router.navigate(['/candidat/jobPostingdetails'], { queryParams: { id: f} });
}
postuler(f:string) {
  this.router.navigate(['/candidat/jobapplication'], { queryParams: { id: f} });
}

}



