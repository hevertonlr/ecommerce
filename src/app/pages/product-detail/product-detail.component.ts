import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { DiscountPipe } from '../../shared/pipes/discount.pipe';
import { PricePipe } from '../../shared/pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { CommentaryModel } from '../../shared/models/commentary.model';
import { CommentsService } from '../../shared/services/comments.service';
import { Observable } from 'rxjs';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';
import { CommentaryComponent } from '../../shared/components/commentary/commentary.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    DiscountPipe,
    PricePipe,
    StarRatingComponent,
    CommentaryComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [DiscountPipe, PricePipe],
})
export class ProductDetailComponent implements OnInit {
  @Input({ required: true }) product: ProductModel = {} as ProductModel;
  @Input({ required: true }) comments: Observable<CommentaryModel[]>;
  productId: string = '0';
  rateAverage: number = 5;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private commentsService: CommentsService,
  ) {
    this.route.queryParams.subscribe(
      (params) => (this.productId = params['product']),
    );
    this.comments = this.commentsService.getByProductId(this.productId);
    this.comments.subscribe((comments) => {
      if (comments.length <= 0) return;
      const total = comments.reduce((sum, comment) => sum + comment.rate, 0);
      this.rateAverage = total / comments.length;
    });
  }

  ngOnInit(): void {
    this.productService
      .getById(this.productId)
      .subscribe((product) => (this.product = product));
  }

  addCart = () => {
    this.cartService.addItem(this.product);
    this.router.navigate(['cart']);
  };
}
