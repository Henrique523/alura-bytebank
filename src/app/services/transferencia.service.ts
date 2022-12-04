import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Transferencia} from "../interfaces/Transferencia";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class TransferenciaService {

  _transferencia: Transferencia[];

  constructor(
    private http: HttpClient
  ) {
    this._transferencia = [];
  }

  get transferencias() {
    return this._transferencia;
  }

  todas() {
    return this.http.get<Transferencia[]>(environment.backendUrl);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidrate(transferencia);
    return this.http.post<Transferencia>(environment.backendUrl, transferencia);
  }

  private hidrate(transferencia: Transferencia) {
    transferencia.data = new Date(Date.now());
  }

}
