import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardsComponent } from './shared/components/product-cards/product-cards.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { name: 'Home', icon: 'home' },
  },
  {
    path: 'card',
    component: ProductCardsComponent,
    data: { name: 'Product-Card', icon: 'folder' },
  },
];
