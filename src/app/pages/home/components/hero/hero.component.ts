import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  images: string[] = [
    'assets/img/banners/1.png',
    'assets/img/banners/2.png',
    'assets/img/banners/3.png',
    'assets/img/banners/4.png',
    'assets/img/banners/5.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
