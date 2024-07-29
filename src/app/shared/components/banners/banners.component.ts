import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss',
})
export class BannersComponent {
  images: any[] | undefined;
  @Output() valueChange = new EventEmitter<any[]>();

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  _activeIndex: number = 2;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor() {
    this.images = [
      {
        itemImageSrc: 'assets/img/banners/banner1.jpg',
        thumbnailImageSrc: 'assets/img/banners/banner1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/img/banners/banner2.jpg',
        thumbnailImageSrc: 'assets/img/banners/banner2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc: 'assets/img/banners/banner3.jpg',
        thumbnailImageSrc: 'assets/img/banners/banner3.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
    ];
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
  galleriaClass() {
    return `w-80`;
  }
}
