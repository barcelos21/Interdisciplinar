import { Component, OnInit, Input } from '@angular/core';
import { Servico } from './servico.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  @Input() servico:Servico;

  constructor() { }

  ngOnInit() {
  }

}
