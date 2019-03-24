import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  metrics:string;
  dashboard:string;
  location:string;
  metricsTitle:string;
  dashboardTitle:string;
  locationTitle:string;

  constructor() {
  	this.metrics = './assets/images/metrics.png';
  	this.dashboard = './assets/images/dashboard.png';
  	this.location = './assets/images/location.png';
  	this.metricsTitle = 'O que posso doar ?';
  	this.dashboardTitle = 'Como ajudar ?';
  	this.locationTitle = 'Encontre um ponto de doação perto de você'
  }


  ngOnInit() {

  }

}
