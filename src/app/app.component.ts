import { Component } from '@angular/core';
import { ITshirt } from './models/tshits.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-store';

  items: ITshirt[] = [
    {
      id: 1,
      name: 'Vue.js T-Shirt',
      image: '../assets/img/1.vue.jpg',
      price: 19.99,
      description: 'Vue.js T-Shirt',
      stack: 'frameworks',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 2,
      name: 'Angular T-Shirt',
      image: '../assets/img/2.angular.jpg',
      price: 19.99,
      description: 'Angular T-Shirt',
      stack: 'frameworks',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 3,
      name: 'React T-Shirt',
      image: '../assets/img/3.react.jpg',
      price: 19.99,
      description: 'React T-Shirt',
      stack: 'frameworks',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 4,
      name: 'Redux T-Shirt',
      image: '../assets/img/4.redux.jpg',
      price: 19.99,
      description: 'Redux T-Shirt',
      stack: 'library',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 5,
      name: 'Node T-Shirt',
      image: '../assets/img/5.node.jpg',
      price: 19.99,
      description: 'Node T-Shirt',
      stack: 'backend',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 6,
      name: 'SASS T-Shirt',
      image: '../assets/img/6.sass.jpg',
      price: 19.99,
      description: 'SASS T-Shirt',
      stack: 'css',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 7,
      name: 'HTML T-Shirt',
      image: '../assets/img/7.html.jpg',
      price: 19.99,
      description: 'HTML T-Shirt',
      stack: 'html',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 8,
      name: 'Github T-Shirt',
      image: '../assets/img/8.git.jpg',
      price: 19.99,
      description: 'Github T-Shirt',
      stack: 'git',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 9,
      name: 'JS T-Shirt',
      image: '../assets/img/12.js.jpg',
      price: 19.99,
      description: 'JS T-Shirt',
      stack: 'css',
      canBuy: true,
      soldOut: false,
    },
    {
      id: 10,
      name: 'Typescript',
      image: '../assets/img/10.ts.jpg',
      price: 19.99,
      description: 'Typescript T-Shirt',
      stack: 'typescript',
      canBuy: true,
      soldOut: false,
    },
  ];

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
}
