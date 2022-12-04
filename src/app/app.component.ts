import { Component } from '@angular/core';

import {Transferencia} from "./interfaces/Transferencia";
import {TransferenciaService} from "./services/transferencia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-bytebank';

  constructor(
    private transferenciaService: TransferenciaService
  ) {}

  transferir($event: Transferencia) {
    this.transferenciaService.adicionar($event);
  }
}
