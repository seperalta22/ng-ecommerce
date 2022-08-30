import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, SwiperModule],
})
export class HeroModule {}
