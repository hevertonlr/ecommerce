import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  itensCart: number = 0;
  searchText: string = '';
  constructor(
    private router: Router,
    private cartService: CartService,
  ) {
    this.cartService.cart.subscribe(
      () => (this.itensCart = this.cartService.count()),
    );
  }

  cartCount = () => (this.itensCart ? this.itensCart.toString() : '0');
  goToCart = () => this.router.navigate(['cart']);
  search = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' || !this.searchText) return;
    event.preventDefault();
    this.router.navigate(['product-list'], {
      queryParams: { q: this.searchText },
    });
    console.log('teste');
  };
}
