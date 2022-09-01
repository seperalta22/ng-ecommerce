import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../../core/services/products/product-data.service';
import { ITshirt } from '../../../models/tshits.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: ITshirt[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productDataService
      .getAllProducts()
      .subscribe((products: ITshirt[]) => {
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productDataService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }
}
