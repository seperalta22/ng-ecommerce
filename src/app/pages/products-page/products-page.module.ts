import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { FormsModule } from '@angular/forms';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductsComponent, ProductsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsPageRoutingModule,
    SharedModule,
    MaterialModule,
  ],
})
export class ProductsPageModule {}
