import { Component, OnInit } from '@angular/core';
import { ITshirt } from '../../../../models/tshits.model';
import { ProductDataService } from '../../../../core/services/products/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  items: ITshirt[] = [];

  // addItem() {
  //   this.items.push({
  //     name: 'nuevoItem',
  //     price: 100,
  //     description: 'This is a new item',
  //     canBuy: true,
  //     soldOut: false,
  //   });
  // }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  readEvent(id: number) {
    console.log('producto: ' + id);
  }

  fetchProducts() {
    this.productDataService.getAllProducts().subscribe((products) => {
      this.items = products;
    });
  }
}
