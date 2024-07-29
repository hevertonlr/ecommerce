import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { ProductModel } from '../../shared/models/product.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products!: Observable<ProductModel[]>;
  filteredProducts!: Observable<ProductModel[]>;
  searchText = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {
    this.products = this.productService.getAll();
    this.filteredProducts = this.products;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.searchText = params['q'] || ''),
    );
    if (this.searchText != '') this.search();
  }

  search = () => {
    const words = this.searchText.toLowerCase().split(/\s+/);

    this.filteredProducts = this.products.pipe(
      map((products: ProductModel[]) =>
        products.filter((product) =>
          words.every((word) => product.name?.toLowerCase()?.includes(word)),
        ),
      ),
    );
  };
}
