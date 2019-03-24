import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtos:Produto[] =  [
		{
			id: "1",
			name: "Teste",
			image: "assets/images/servicos/corteCabelo.jpg",
			price:  49.99,
			about: "Este é o produto"	
		},
		{
			id: "2",
			name: "Teste",
			image: "assets/images/servicos/corteCabelo.jpg",
			price:  49.99,
			about: "Este é o produto"	
		},
		{
			id: "3",
			name: "Teste",
			image: "assets/images/servicos/corteCabelo.jpg",
			price:  49.99,
			about: "Este é o produto"	
		},
		{
			id: "4",
			name: "Teste",
			image:  "assets/images/servicos/corteCabelo.jpg",
			price:  49.99,
			about: "Este é o produto"	
		},
		{
			id: "5",
			name: "Teste",
			image: "assets/images/servicos/corteCabelo.jpg",
			price:  49.99,
			about: "Este é o produto"	
		},
		{
			id: "6",
			name: "Teste",
			image: "assets/images/servicos/corteCabelo.jpg",
			price:  49.99,
			about: "Este é o produto"	
		}

	];

	listarProdutos(): Produto[] {
		return this.produtos;
	}

  constructor() { }

  ngOnInit() {
  }

}
