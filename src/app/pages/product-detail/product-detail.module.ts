import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductDetailRouterModule } from './product-detail-router.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRouterModule],
})
export class ProductDetailModule {}
