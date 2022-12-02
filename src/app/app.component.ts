import { Component } from '@angular/core';

import {Transferencia} from "./interfaces/Transferencia";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bytebank';
  transferencia: Transferencia = {
    destino: 0,
    valor: 0,
  };

  transferir($event: Transferencia) {
    console.log($event);
    this.transferencia = $event;
  }
}
