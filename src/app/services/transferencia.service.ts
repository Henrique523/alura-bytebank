import { Injectable } from '@angular/core';
import {Transferencia} from "../interfaces/Transferencia";

@Injectable({ providedIn: 'root' })
export class TransferenciaService {

  _transferencia: Transferencia[];

  constructor() {
    this._transferencia = [];
  }

  get transferencias() {
    return this._transferencia;
  }

  adicionar(transferencia: Transferencia) {
    this.hidrate(transferencia);
    this._transferencia.push(transferencia);
  }

  private hidrate(transferencia: Transferencia) {
    transferencia.data = new Date(Date.now());
  }

}
