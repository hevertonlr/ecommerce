import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { PricePipe } from '../../pipes/price.pipe';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, PricePipe, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [PricePipe, DiscountPipe],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductModel;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {}

  onClick = () => {
    this.router.navigate(['/detail'], {
      queryParams: { product: this.product.id },
    });
  };

  addCart = () => this.cartService.addItem(this.product);
}
