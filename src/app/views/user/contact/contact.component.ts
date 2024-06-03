import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: any;
  email: any;
  sujet:any;
  message: any;
  messageSuccess: any;
  constructor(private ds:DataService,private route:Router) { }

  contact(f:any){
    const data =f.value
    console.log(data)
    this.ds.sendContact(data).subscribe(response=>{
      this.messageSuccess=`  Le message est envoyée avec succés`
      console.log('Données envoyées avec succès à la base de données !');
      f.resetForm();
    }
    ,(err:HttpErrorResponse)=>{
      console.log(err.message)

    })
  }
  ngOnInit(): void {
  }
}
