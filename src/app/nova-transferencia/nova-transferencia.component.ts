import {Component, EventEmitter, Output} from "@angular/core";

import {Transferencia} from "../interfaces/Transferencia";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<Transferencia>();

  valor = 0;
  destino = 0;

  transferir() {
    console.log('Nova transferencia criada');
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });

    this.limparCampos();
  }

  private limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
