import {Component, Input, OnInit} from '@angular/core';

import {Transferencia} from "../interfaces/Transferencia";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // @ts-ignore
  @Input() transferencias: Transferencia[];

  constructor() { }

  ngOnInit(): void {
  }

}
