import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
   firstSlider:string;
   secondSlider:string;
   thirdSlider:string;
   register:string;
   learnMore:string;
   testimonies:string;
   headlineRegister:string;
   headlineLearnMore:string;
   headlineTestimonies:string;
   registerCaption:string;
   learnMoreCaption:string;
   testimoniesCaption:string;

  constructor() {
    this.firstSlider='./assets/images/slider1.jpg';
    this.secondSlider='./assets/images/slider2.jpg';
    this.thirdSlider='./assets/images/slider3.jpg';
    this.register='Cadastre-se';
    this.learnMore='Saiba Mais sobre o Projeto!';
    this.testimonies='Veja o que estão falando!';
    this.headlineRegister =  'Uma forma simples de ajudar!';
    this.headlineLearnMore= 'Você pode fazer a difereça!';
    this.headlineTestimonies = '\"Nunca pensei que pudesse ajudar tantas pessoas!\"'
    this.registerCaption = 'Qualquer doação é bem vinda.';
    this.learnMoreCaption = 'O importante não é o que se dá, mas o amor com que se dá!';
    this.testimoniesCaption = 'Veja os relatos de pessoas que já colaboraram com nosso projeto!';
  }

  ngOnInit() {
  }

}
