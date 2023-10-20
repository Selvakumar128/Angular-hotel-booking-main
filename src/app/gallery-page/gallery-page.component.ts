import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent {
addColor(){
  return(
    'btn-#589442:true'
  )
}

imagesCard1:any[]=[
  {id:101,source:'../../assets/gallery/g3.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:102,source:'../../assets/gallery/g2.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:103,source:'../../assets/gallery/g6.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:104,source:'../../assets/gallery/g4.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:105,source:'../../assets/gallery/g1.jfif',heading:'Hotel Stay Inn',link:'Book now'},
  {id:106,source:'../../assets/rooms/rooms.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:107,source:'../../assets/gallery/g10.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:108,source:'../../assets/gallery/g2.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:109,source:'../../assets/gallery/g5.jpg',heading:'Hotel Stay Inn',link:'Book now'},
  {id:110,source:'../../assets/home/gallery_img4.webp',heading:'Hotel Stay Inn',link:'Book now'},
  {id:111,source:'../../assets/home/galery_img5.webp',heading:'Hotel Stay Inn',link:'Book now'},
  {id:112,source:'../../assets/home/galery_img6.webp',heading:'Hotel Stay Inn',link:'Book now'}
]

}
