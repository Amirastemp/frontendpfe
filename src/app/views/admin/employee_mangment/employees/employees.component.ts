import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{

  dataArray:any=[]
  dataEmployee:any={}
  pageSize = 6; // Number of items per page
  currentPage = 1; // Current page number
  totalPages=1; // Total number of pages
  pagedData: any[] = [];
  messageSuccess=''
  isModalOpen: boolean = true;
  itemToModify: any = null;
  userdata:any={}
  userRole=''
  constructor(private authadmin:AuthadminService,
    private dataservice:DataService,
    private route:Router) {
    }

  ngOnInit(): void {
console.log("nnnnnnn");
    this.authadmin.getEmployees(this.userdata).subscribe(data=>{
      console.log(data)
      this.dataArray=data
      this.totalPages = Math.ceil(this.dataArray.length / this.pageSize);
        // Update the data for the current page
        this.updatePageData();

  })
  this.userRole =this.dataservice.getUser().role
  console.log(this.userRole);
}

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
deleteEmployee(item: any) {
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
  this.route.navigate(['/admin/employeedetails/'+item._id]);
}
/************************************************************ */
goto(item:any){
  console.log(item);
  this.route.navigate(['/admin/updateemployee/'+item._id]);
}
}
 {

}
