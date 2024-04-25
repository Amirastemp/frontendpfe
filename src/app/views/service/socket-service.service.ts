// socket.service.ts
import { Injectable } from '@angular/core';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket = io('http://localhost:3000'); // Adjust the server URL accordingly

  constructor() { }

  emitNewRequest(requestData: any): void {
    this.socket.emit('newRequest', requestData);
  }

  onNotification(callback: (notification: any) => void): void {
    this.socket.on('notification', callback);
  }

}

