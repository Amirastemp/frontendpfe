import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  serverMessage: string='';

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    // this.socket.on('message', (data: string) => {
    //   this.serverMessage = data;
    //   console.log(this.serverMessage)
    // });
}}
