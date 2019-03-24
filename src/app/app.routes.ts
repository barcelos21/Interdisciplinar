import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ContactComponent} from './contact/contact.component';
import {FeaturesComponent} from './features/features.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ServicesComponent} from './services/services.component';
import {ServicosComponent} from './servicos/servicos.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {ServicoDetailComponent} from './servico-detail/servico-detail.component';
import {AboutComponent} from './about/about.component';


export const ROUTES: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'servicos',
        component: ServicosComponent
      },
      {
        path: 'servicos/:id',
        component: ServicoDetailComponent
      },
      {
        path: 'produtos',
        component: ProdutosComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }

]
