import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { ProductModel } from '../../shared/models/product.model';
import { map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../shared/services/search.service';

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
  filterText: string = 'Todos os Produtos';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
    this.filteredProducts = this.searchService.currentSearchTerm.pipe(
      switchMap((term) => {
        this.filterText = term == '' ? 'Todos os Produtos' : term;
        return this.products.pipe(
          map((products) =>
            products.filter((product) =>
              product.name.toLowerCase().includes(term.toLowerCase()),
            ),
          ),
        );
      }),
    );
  }
}
