import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ITshirt } from '../../../../models/tshits.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() tshirt: ITshirt = {
    id: 1,
    name: 'Vue.js T-Shirt',
    image: '../assets/img/1.vue.jpg',
    price: 19.99,
    description: 'Vue.js T-Shirt',
    stack: 'frameworks',
    canBuy: true,
    soldOut: false,
  };

  @Output() AddToCartEvent = new EventEmitter();

  today = new Date();

  addToCart(): void {
    console.log('esto viene del product component');
    this.AddToCartEvent.emit(this.tshirt.id);
  }

  constructor() {
    console.log('1.constructor');
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log('2.ngOnChanges');
    console.log(change);
  }

  ngOnInit(): void {
    console.log('3.ngOnInit');
  }
}
