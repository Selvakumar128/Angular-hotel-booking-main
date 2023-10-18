import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  gallery: any;
  galleryId: any;
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit():void{
    this.galleryId=this.activatedRoute.snapshot.paramMap.get('id')
    
  }
  get selectedImage() {
    return this.imagesCard1.find((image) => image.id === +this.galleryId);
  }
img:string="Did you stay Hotel Grand Palace recently that was refreshingly good (or particularly bad)? Tell us what happened during your last hotel stay, what you liked, and what you didnt" ;
detail:string="Hotel Grand Palace is centrally located in Coimbatore city. Few minutes walk from the central bus station, Gandhipuram 2kms from Railway station and just 9 Kms from the Coimbatore Airport. Exquisite & Elegantly furnished AC, Single, Double and Trible beded Delux rooms are available.";

  imagesCard1:any[]=[
    {id:101,source:'../../assets/gallery/g3.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:102,source:'../../assets/gallery/g2.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:103,source:'../../assets/gallery/g6.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:104,source:'../../assets/gallery/g4.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:105,source:'../../assets/gallery/g1.jfif',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:106,source:'../../assets/rooms/rooms.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:107,source:'../../assets/gallery/g10.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:108,source:'../../assets/gallery/g2.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:109,source:'../../assets/gallery/g5.jpg',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:110,source:'../../assets/home/gallery_img4.webp',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:111,source:'../../assets/home/galery_img5.webp',heading:'Hotel Stay Inn',link:'Book now',price:'$200'},
    {id:112,source:'../../assets/home/galery_img6.webp',heading:'Hotel Stay Inn',link:'Book now',price:'$200'}
    
  ]
}


