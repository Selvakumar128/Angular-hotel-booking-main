import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
isCenterImage(_t5: any) {
throw new Error('Method not implemented.');
}

  images: any[] = [
    { source: '../../assets/home/home_page.jpg', alt: 'Image 1' },
    { source: '../../assets/gallery/g10.jpg', alt: 'Image 2' },
    { source: '../../assets/gallery/g2.jpg', alt: 'Image 3' },
    { source: '../../assets/gallery/g6.jpg', alt: 'Image 4' },
    { source: '../../assets/gallery/g3.jpg', alt: 'Image 5' },
    { source: '../../assets/gallery/g5.jpg', alt: 'Image 6' },
    { source: '../../assets/gallery/g4.jpg', alt: 'Image 7' },
    { source: '../../assets/gallery/g7.jfif', alt: 'Image 8' },
    { source: '../../assets/gallery/g1.jfif', alt: 'Image 9' },
    { source: '../../assets/booking/booking_bg.webp', alt: 'Image 10' },
    { source: '../../assets/g9.webp', alt: 'Image 11' },
    { source: '../../assets/rooms/rooms.jpg', alt: 'Image 11' },
  ];

  itemsPerSlide = 3;
  currentIndex=0;
  interval = 3000;
  
  ngOnInit() {
    this.startAutoplay();
  }

  startAutoplay() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.interval);
  }
  
}



