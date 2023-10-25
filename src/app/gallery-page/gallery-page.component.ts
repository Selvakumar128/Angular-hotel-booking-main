import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
addColor(){
  return(
    'btn-#589442:true'
  )
}


imagesCard1:any[]=[]
constructor(private galleryService:GalleryService){}


ngOnInit(){
  this.imagesCard1=this.galleryService.getImages()
}
}
