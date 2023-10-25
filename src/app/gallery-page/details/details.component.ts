import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  gallery: any;
  galleryId: any;

  imagesCard1:any[]=[]

  constructor(private activatedRoute:ActivatedRoute ,private galleryService:GalleryService){}
  
  ngOnInit():void{
    this.imagesCard1=this.galleryService.getImages()
    this.galleryId=this.activatedRoute.snapshot.paramMap.get('id')
  } 

  get selectedImage() {
    return this.imagesCard1.find((image) => image.id === +this.galleryId);
  }

  text:string="Did you stay Hotel Grand Palace recently that was refreshingly good (or particularly bad)? Tell us what happened during your last hotel stay, what you liked, and what you didnt" ;
  detail:string="Hotel Grand Palace is centrally located in Coimbatore city. Few minutes walk from the central bus station, Gandhipuram 2kms from Railway station and just 9 Kms from the Coimbatore Airport. Exquisite & Elegantly furnished AC, Single, Double and Trible beded Delux rooms are available.";

}


