import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';
import { CartProductModel } from '../models/cart-product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_TOKEN: string = 'e-cart';
  cart: BehaviorSubject<CartModel>;

  constructor() {
    this.cart = new BehaviorSubject<CartModel>(
      JSON.parse(sessionStorage.getItem(this.CART_TOKEN) as string) || {
        itens: [],
      },
    );
  }

  count = (): number => this.cart.getValue().itens.length;

  changeQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    const cart = this.cart.getValue();
    const index = cart.itens.findIndex((item) => item.id == productId);
    if (index >= 0) {
      const item: CartProductModel = cart.itens[index];
      item.quantity = quantity;
      cart.itens[index] = item;
      this.save(cart);
    }
  };

  addItem = (item: ProductModel) => {
    const cart = this.cart.getValue();
    const index = cart.itens.findIndex((product) => product.id == item.id);
    if (index < 0) {
      const cartProduct: CartProductModel = item as CartProductModel;
      cartProduct.quantity = 1;
      cart.itens.push(cartProduct);
    } else {
      const item = cart.itens[index];
      item.quantity += 1;
      cart.itens[index] = item;
    }

    this.save(cart);
  };

  removeItem = (productId: string) => {
    const cart = this.cart.getValue();
    const index = cart.itens.findIndex((product) => product.id == productId);
    cart.itens.splice(index, 1);
    this.save(cart);
  };

  save = (cart: CartModel) => {
    this.cart.next(cart);
    sessionStorage.setItem(
      this.CART_TOKEN,
      JSON.stringify(this.cart.getValue()),
    );
  };

  reset = () => this.save({ itens: [] });
}
