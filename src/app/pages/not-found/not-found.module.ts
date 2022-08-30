import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRouterModule } from './not-found-router.module';
import { NotFoundComponent } from './components/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRouterModule],
})
export class NotFoundModule {}
