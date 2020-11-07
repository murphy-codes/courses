import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500);
  }

  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Server name: ' + this.serverName;
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
