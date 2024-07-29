import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  itensCart: number = 0;
  searchText: string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private searchService: SearchService,
  ) {
    this.cartService.cart.subscribe(
      () => (this.itensCart = this.cartService.count()),
    );
  }

  cartCount = () => (this.itensCart ? this.itensCart.toString() : '0');
  goToCart = () => this.router.navigate(['cart']);
  onSearch = () => {
    this.searchService.updateSearchTerm(this.searchText);
    this.router.navigate(['product-list']);
  };
}
