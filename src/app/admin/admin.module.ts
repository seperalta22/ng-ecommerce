import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { FormProductComponent } from './components/form-product/form-product.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductsListComponent,
    DashboardComponent,
    TableComponent,
    FormProductComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
