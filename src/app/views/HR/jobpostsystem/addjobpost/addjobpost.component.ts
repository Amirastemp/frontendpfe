import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';
import { JobserviceService } from 'src/app/views/service/jobservice.service';

@Component({
  selector: 'app-addjobpost',
  templateUrl: './addjobpost.component.html',
  styleUrls: ['./addjobpost.component.css']
})
export class AddjobpostComponent implements OnInit{
  registerjobData: any = {};
  errorMessage = '';
  userRole='';
  isSuccessful = false;
  isFailed = false;
  user:any={};
  constructor(private job:JobserviceService,private _router:Router,private datas:DataService) { }
  ngOnInit(): void {

    }
    onSubmit(){

    this.job.addjobpost(this.registerjobData).subscribe({
      next: (data: any) => {
        console.log('Response:', data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }
 }

