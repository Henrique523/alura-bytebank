import {Component, EventEmitter, Output} from "@angular/core";

import {Transferencia} from "../interfaces/Transferencia";
import {TransferenciaService} from "../services/transferencia.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<Transferencia>();

  valor = 0;
  destino = '';

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
  ) {}

  transferir() {
    console.log('Nova transferencia criada');
    // @ts-ignore
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.transferenciaService.adicionar(valorEmitir).subscribe(
      resultado => {
        console.log(resultado);
        this.transferenciaService.todas();
        this.limparCampos();
        this.router.navigate(['extrato']);
      },
      (error) => console.error(error)
    );

  }

  private limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
