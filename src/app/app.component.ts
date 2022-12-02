import { Component } from '@angular/core';

import {Transferencia} from "./interfaces/Transferencia";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bytebank';
  transferencias: Transferencia[] = [];

  transferir($event: Transferencia) {
    console.log($event);
    this.transferencias.push({...$event, data: new Date(Date.now())});
  }
}
