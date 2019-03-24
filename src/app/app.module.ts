import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicoComponent } from './servicos/servico/servico.component';
import { ServicosService } from './servicos/servicos.service';
import { ServicoDetailComponent } from './servico-detail/servico-detail.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FeaturesComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ServicosComponent,
    ProdutosComponent,
    ServicoComponent,
    ServicoDetailComponent,
    ProdutoComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ServicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
