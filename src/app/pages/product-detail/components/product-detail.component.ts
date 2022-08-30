import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITshirt } from '../../../models/tshits.model';
import { ProductDataService } from '../../../core/services/products/product-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: ITshirt | undefined;

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = parseInt(params['id']);
      this.product = this.productDataService.getProduct(id);
    });
  }
}
