import {Component} from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  // @ts-ignore
  valor: number;
  // @ts-ignore
  destino: number;

  transferir() {
    console.log('Nova transferencia criada');
    console.log('Valor', this.valor);
    console.log('Destino', this.destino);
  }
}
