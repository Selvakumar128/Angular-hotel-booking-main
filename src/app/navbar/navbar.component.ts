import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  color1(){
    return{
      'color':'#589442'
    }
  }

  isDropdownOpen:boolean=false;
  onclick(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigationItems = [
    { link: '/home', text: 'Home' },
    { link: '/gallery', text: 'Gallery' },
    { link: '/rooms', text: 'Rooms' },
    { link: '/reservation', text: 'Reservation' }
  ];
}
