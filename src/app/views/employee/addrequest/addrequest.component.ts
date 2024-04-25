import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../../service/authadmin.service';
import { Router } from '@angular/router';
import { AuthemployeeService } from '../../service/authemployee.service';
import { DataService } from '../../service/data.service';
import { io } from 'socket.io-client';
import { SocketServiceService } from '../../service/socket-service.service';


@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit{
  requestData: any = {};
  errorMessage = '';
  user:any={};
  isSuccessful = false;
  isSignUpFailed = false;
  userId='';
  socket: any;
  constructor(private _auth: AuthemployeeService,private _data:DataService ,private _router:Router,private socketService: SocketServiceService) {
        // Connect to the WebSocket server and HR namespace
        this.socket = io('/hr');
   }
  ngOnInit(): void {
 this. userId=this._auth.getUser().id;
    console.log(this.userId);
    this._data.getUserById(this.userId).subscribe({
      next: (user: any) => {
        console.log('User:', user);
        this.user = user;
      },
      error: (err: any) => {
        console.error('Error fetching user data:', err);
        // Handle error, e.g., display an error message to the user
      }
    });
    
  }
  onSubmit(): void {
 const { startDate,endDate,cause} = this.requestData;
 const id_emp=this.user._id;
 const email=this.user.email;
 const password=this.user.password;

    this._auth.addrequest({id_emp,startDate,endDate,cause}).subscribe({

      next: (data: any) => {
        console.log('Response:', data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.socketService.emitNewRequest(data);
        this._router.navigate(['/employee/requests']);
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

    // localStorage.setItem('Token',data.token)
        // this.usersService.saveUser(data);

        // this.reloadPage();
  reloadPage(): void {
    window.location.reload();
  }
}



