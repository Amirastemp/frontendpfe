import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from '../../service/authadmin.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit{

  dataArray:any=[]

  dataRH:any={
  }
  pageSize = 6; // Number of items per page
  currentPage = 1; // Current page number
  totalPages=1; // Total number of pages
  pagedData: any[] = [];
  messageSuccess=''
  isModalOpen: boolean = true;
  itemToModify: any = null;
  userdata:any={
  }
  constructor(private authadmin:AuthadminService,private dataservice:DataService,private route:Router) {


    }

  ngOnInit(): void {
    this.authadmin.Rhs(this.dataRH).subscribe(data=>{
      console.log(data)
      this.dataArray=data
      this.totalPages = Math.ceil(this.dataArray.length / this.pageSize);
        // Update the data for the current page
        this.updatePageData();

  })}

/*******************Updatepages****************************************** */
 updatePageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = Math.min(startIndex + this.pageSize, this.dataArray.length);
      this.pagedData = this.dataArray.slice(startIndex, endIndex);
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
/**********************deleteitem************************************** */
deleteRh(item: any) {
  this.dataservice.deleteuser(item.email).subscribe({
      next: (response:any) => {

          console.log('Utilisateur supprimé avec succès', response);
          // Remove the item from the data array
          const index = this.pagedData.findIndex(dataItem => dataItem.email === item.email);
          if (index !== -1) {
              this.pagedData.splice(index, 1);
          }
      },
      error: (error:any) => {
          console.error('Erreur lors de la suppression de l\'utilisateur', error);
          // Handle the error here
      }
  });
}





details(item: any) {
  console.log(item);
  this.route.navigate(['/admin/rhdetails/'+item._id]);
}
/************************************************************ */
goto(item:any){
  console.log(item);
  this.route.navigate(['/admin/update-rh/'+item._id]);
}
}
