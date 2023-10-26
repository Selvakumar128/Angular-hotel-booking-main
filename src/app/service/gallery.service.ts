import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  getImages():any[]{
    return[
      {id:101,source:'../../assets/gallery/g3.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$559'},
      {id:102,source:'../../assets/gallery/g2.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$599'},
      {id:103,source:'../../assets/gallery/g6.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$749'},
      {id:104,source:'../../assets/gallery/g4.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$849'},
      {id:105,source:'../../assets/gallery/g1.jfif',heading:'Hotel Stay Inn',link:'Book now',price:'$699'},
      {id:106,source:'../../assets/rooms/rooms.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$899'},
      {id:107,source:'../../assets/gallery/g10.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$599'},
      {id:108,source:'../../assets/gallery/g2.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$459'},
      {id:109,source:'../../assets/gallery/g5.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$999'},
      {id:110,source:'../../assets/home/gallery_img4.webp',heading:'Hotel Stay Inn',link:'Book now',price:'$399'},
      {id:111,source:'../../assets/home/galery_img5.webp',heading:'Hotel Stay Inn',link:'Book now',price:'$549'},
      {id:112,source:'../../assets/home/galery_img6.webp',heading:'Hotel Stay Inn',link:'Book now',price:'$749'}
    ]
  }
}
