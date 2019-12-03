import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  statusSome: string = 'no server created';
  serverName: string = '';
  serverCreate: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreate = true;
    this.statusSome = 'Server was created ' + this.serverName;
  }
}
