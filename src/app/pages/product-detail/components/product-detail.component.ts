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
  product!: ITshirt;

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productDataService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: ITshirt = {
      id: '222',
      name: 'prueba post',
      price: 20,
      description: 'a ver si esta verga puede guardar datos',
      image: 'https://picsum.photos/200',
      canBuy: true,
      soldOut: false,
      stack: 'tests',
    };
    this.productDataService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const changes: Partial<ITshirt> = {
      name: 'prueba put',
      price: 30,
      description: 'a ver si esta verga puede actualizar datos',
      image: 'https://picsum.photos/200',
      canBuy: true,
      soldOut: false,
      stack: 'tests',
    };
    this.productDataService
      .updateProduct('222', changes)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productDataService.deleteProduct('222').subscribe((rta) => {
      console.log(rta);
    });
  }
}
