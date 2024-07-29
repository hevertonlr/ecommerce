import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-daily-deals',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './daily-deals.component.html',
  styleUrl: './daily-deals.component.scss',
})
export class DailyDealsComponent {
  products!: Observable<ProductModel[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getPromos();
  }
}
