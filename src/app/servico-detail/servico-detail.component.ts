import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos/servicos.service';
import { Servico } from '../servicos/servico/servico.model';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-servico-detail',
  templateUrl: './servico-detail.component.html',
  styleUrls: ['./servico-detail.component.css']
})
export class ServicoDetailComponent implements OnInit {

  servico:Servico;

  constructor(private servicoService:ServicosService, private route: ActivatedRoute) { };

  ngOnInit() {
  	this.servicoService.servicoPorId(this.route.snapshot.params['id']).subscribe(servico => this.servico = servico);
  }

}
