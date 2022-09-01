import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/components/contact.component';
import { ProductsPageComponent } from './pages/products-page/components/products-page/products-page.component';
import { NotFoundComponent } from './pages/not-found/components/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/components/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products-page/products-page.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'products/:id',
        loadChildren: () =>
          import('./pages/product-detail/product-detail.module').then(
            (m) => m.ProductDetailModule
          ),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
