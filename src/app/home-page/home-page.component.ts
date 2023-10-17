import { Component, Directive } from '@angular/core';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  color1(){
    return{
      'color':'#589442'
    }
  }
  card:any[]=[
    {source:'../../assets/home/gvprakash.jpg',
    name:'GV PRAKASH',
    details:'G. V. Prakash Kumar is an Indian music composer, playback singer,actor and producer known for his work in Tamil films and a few Telugu films as well. His first film was S Pictures  Veyil and he gained fame in Tamil films by the early 2010s. He made his debut in acting on 2015 through Darling.'
    },
    {
      source:'../../assets/home/aadhi.cms',
      name:'AADHI',
      details:'Hiphop Tamizha Adhi was born on 20 February 1990 in Sathyamangalam, Erodet, Tamil Nadu. He is a music artist & composer, known for Thani Oruvan (2015), Kaththi (2014) He is married to Lakshiya Devareddy. His first movie was Meesaya Murukku.Adhi, an aspiring musician, falls in love with Nila.'
    },
    {
      source:'../../assets/home/anirudh.cms',
      name:'ANIRUDH',
      details:'Anirudh Ravichander, also credited mononymously as Anirudh, is an Indian music composer, music producer, singer who works in the Indian film industry, primarily in Tamil films. He has also composed music for various Telugu films. He is the son of actor Ravi Raghavendra and the nephew of Rajinikanth'
    }
  ]

  reviews:any[]=[
    {
      icons:'fas fa-dice',
      heading:'Guest Reviews',
      detail:' Did you stay Hotel Grand Palace recently that was refreshingly good (or particularly bad)? Tell us what happened during your last hotel stay, what you liked, and what you didnt.' 
    },
    {
      icons:'far fa-star',
      heading:'Why to choose us',
      detail:'Exquisite & Elegantly furnished Single, Double and Trible beded Delux rooms | 24 hours running hot water| Ample car parking | Free WiFi | Modern facilities and amenities'
    },
    {
      icons:' fas fa-feather-alt',
      heading:'Coimbatore attractions',
      detail:'Annamalai Wildlife Sanctuary, Esha Yoga, Black thunder, kovai kondattam, Coonoor, Kotagiri, Monkey falls, Parambikulam-Aliyar, Top slip, Ooty Lake, Vaideki Waterfalls, Valparai'
    }


  ]
  
  }