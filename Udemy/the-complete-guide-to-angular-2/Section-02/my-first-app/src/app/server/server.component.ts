import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: #f8f8ff;
    }
  `]
})
export class ServerComponent {
  // serverId: number = 10;
  // serverStatus: string = 'offline';
  serverId = 5;
  serverStatus = 'online';

  constructor() {
    this.serverId = Math.ceil(Math.random() * 100);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // getServerStatus() {
  //   this.serverId+=1;
  //   if (this.serverStatus === 'offline') { this.serverStatus = 'online' }
  //   else { this.serverStatus = 'offline' }
  //   return this.serverStatus;
  // }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? '#066d0f' : '#7e0505';
  }
};