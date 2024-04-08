import { Component, OnInit } from '@angular/core';
import { AuthemployeeService } from '../../service/authemployee.service';
import { CongéService } from '../../service/congé.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

 datareq:any[]=[];
  constructor(private auth :AuthemployeeService,private conge:CongéService,private data : DataService){}
  ngOnInit(): void {
this.auth.request().subscribe({
  next:(Response:any[])=>{
    console.log("all requests");
    this.datareq=Response;

    this.loadEmployees();
    console.log("employee aaded");
    console.log(this.datareq);
  },error:(err:any)=>{
console.log(err);
  }
});
  }
  loadEmployees(): void {
    this.datareq.forEach((Request: any) => {
      this.data.getUserById(Request.id_emp).subscribe((employee: any) => {
        Request.employee = employee; // Ajout des informations sur l'employé à la demande
      });
    });
  }
  approved(item: any): void {
    // Mettre à jour le statut de la demande en 'Approved'
    item.status = 'Approved';
    this.updateRequestStatus(item);
  }

  rejected(item: any): void {
    // Mettre à jour le statut de la demande en 'Rejected'
    item.status = 'Rejected';
    this.updateRequestStatus(item);
  }

  // Méthode pour mettre à jour le statut de la demande dans la base de données
  updateRequestStatus(item: any): void {
    this.conge.updaterequest(item._id,item).subscribe(
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
