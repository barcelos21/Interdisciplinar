import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo;
  about='Sobre';
  contact='Contato';
  services='Serviços';
  products='Produtos';

  constructor() {
    this.logo='./assets/images/AllPlaces.png';
   }

  ngOnInit() {
  }

}
