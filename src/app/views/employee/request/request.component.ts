import { Component, OnInit } from '@angular/core';
import { AuthemployeeService } from '../../service/authemployee.service';
import { Router } from '@angular/router';
import { CongéService } from '../../service/congé.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestData: any = {};
  datareq: any[] = [];
  username='';
  pagedData: any[] = [];
  pageSize = 6; // Number of items per page
  currentPage = 1; // Current page number
  totalPages=1;
  constructor(private auth: AuthemployeeService,private congeservice:CongéService,private route:Router) { }

  ngOnInit(): void {
    this.username = this.auth.getUser().username;
    this.auth.requestbyidemp(this.requestData).subscribe((data: any) => {
      console.log(data);
      this.datareq = data;
      this.totalPages = Math.ceil(this.datareq.length / this.pageSize);
      // Update the data for the current page
      this.updatePageData();

      console.log(this.datareq);
    });
  }

prevPage() {
  if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageData();
  }
}
nextPage() {
if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePageData();
}
}
  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.datareq.length);
    this.pagedData = this.datareq.slice(startIndex, endIndex);
}
/******************************************************* */

modify(f:any){
  console.log(f);
  this.route.navigate(['/employee/updaterequest/'+f._id]);
  console.log("done");
}

cancel(f:any){
  console.log(f);
  this.congeservice.Deleterequest(f._id).subscribe({
      next: (response:any) => {

          console.log('Utilisateur supprimé avec succès', response);
          //Remove the item from the data array
          const index = this.pagedData.findIndex(dataItem => dataItem._id === f._id);
          if (index !== -1) {
              this.pagedData.splice(index, 1);
          }
      },
      error: (error:any) => {
          console.error( error);
          // Handle the error here
      }
  });
}
}
