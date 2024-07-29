import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
})
export class BestSellersComponent {
  products!: Observable<ProductModel[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getAvoidPromos();
  }
}
