import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation-parent/reservation.component';
import { ContactParentComponent } from './contact-parent-table/contact-parent.component';
import { DetailsComponent } from './gallery-page/details/details.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'gallery',component:GalleryPageComponent},
  // {path:'gallery',loadChildren: () => import('./gallery-page/gallery-page.component').then(m => m.GalleryPageComponent)},
  {path:'details/:id',component:DetailsComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'contact',component:ContactParentComponent}
];
export const AppRoutingModule=RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})
