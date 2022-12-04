import {Component, OnInit} from '@angular/core';

import {Transferencia} from "../interfaces/Transferencia";
import {TransferenciaService} from "../services/transferencia.service";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // @ts-ignore
  transferencias: Transferencia[] = [];

  constructor(
    private transferenciaService: TransferenciaService
  ) {}

  ngOnInit(): void {
    this.transferenciaService.todas().subscribe(
      (transferencias) => {
        console.table(transferencias);
        this.transferencias = transferencias;
      }
    );
  }
}
