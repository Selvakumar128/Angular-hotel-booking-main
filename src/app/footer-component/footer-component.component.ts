import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent {
color1(){
  return{
    'color':'#589442'
  }
}

tourism:any[]=[
  {
    source:'../../assets/home/maruthamalai.jpg',
    place:'Maruthamalai_Temple',
    location:'Maruthamalai'
  },
  {
    source:'../../assets/home/monkey_falls.webp',
    place:'Monkey_falls',
    location:'Valparai'
  },
  {
    source:'../../assets/home/isha.jpg',
    place:'Dhynalinga',
    location:'Isha'
  }
]


gallery:any[]=[
  {source:'../../assets/home/galery_img1.jfif'},
  {source:'../../assets/home/gallery_img2.jpg'},
  {source:'../../assets/home/galery_img3.jfif'},
  {source:'../../assets/home/gallery_img4.webp'},
  {source:'../../assets/home/galery_img5.webp'},
  {source:'../../assets/home/galery_img6.webp'}
]

icon:any[]=[
  {name:'fab fa-facebook'},
  {name:'fab fa-instagram'},
  {name:'fab fa-telegram-plane'},
  {name:'fab fa-twitter'},
]

}
