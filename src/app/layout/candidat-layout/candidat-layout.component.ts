import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-candidat-layout',
  templateUrl: './candidat-layout.component.html',
  styleUrls: ['./candidat-layout.component.css']
})
export class CandidatLayoutComponent implements OnInit {
  user:any={};
  username='';
  constructor(private datas:DataService){}
  ngOnInit(): void {
    this.user=this.datas.getUser();
    console.log(this.user);
    this.username=this.user.username;
    console.log(this.username);
    
  }

}
