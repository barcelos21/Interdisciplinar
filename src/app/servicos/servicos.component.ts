import { Component, OnInit } from '@angular/core';
import { Servico } from './servico/servico.model';
import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

	servicos:Servico[]

  constructor(private servicosService: ServicosService) { };

  ngOnInit() {
  	this.servicosService.listarServicos().subscribe(servicos => this.servicos = servicos);
  }

}
