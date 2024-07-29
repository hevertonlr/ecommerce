import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { CartModel } from '../../shared/models/cart.model';
import { CartProductModel } from '../../shared/models/cart-product.model';
import { PricePipe } from '../../shared/pipes/price.pipe';
import { DiscountPipe } from '../../shared/pipes/discount.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, PricePipe, DiscountPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers: [PricePipe, DiscountPipe],
})
export class CartComponent implements OnInit {
  shipping: string = 'Grátis';
  total: string = '';
  cart: CartModel;
  constructor(
    private router: Router,
    private cartService: CartService,
  ) {
    this.cart = this.cartService.cart.getValue();
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
      let result = 0;
      for (const product of this.cart.itens) {
        result += product.discount
          ? this.priceDiscount(this.priceByQuantity(product), product.discount)
          : this.priceByQuantity(product);
      }

      this.total = `R$ ${result.toFixed(2).replaceAll('.', ',')}`;
    });
  }

  addItem = (product: CartProductModel) =>
    this.cartService.changeQuantity(product.id, product.quantity + 1);
  removeItem = (product: CartProductModel) => {
    if (product.quantity <= 1) return;
    this.cartService.changeQuantity(product.id, product.quantity - 1);
  };
  deleteItem = (product: CartProductModel) =>
    this.cartService.removeItem(product.id);

  priceByQuantity = (product: CartProductModel) =>
    product.price * product.quantity;

  priceDiscount = (price: number, discount: number) => price * (1 - discount);

  priceResume = (product: CartProductModel) => {
    let priceResume = this.priceByQuantity(product);
    if (product.discount)
      priceResume = this.priceDiscount(priceResume, product.discount);

    return `R$ ${priceResume.toFixed(2).replaceAll('.', ',')}`;
  };

  detail = (product: CartProductModel) =>
    this.router.navigate(['detail'], { queryParams: { product: product.id } });
}
