import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
// import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChildTableComponent } from './resrevation-child-table/child-table.component';
import { ChildParentInteractionComponent } from './contact-child-parent-interaction/child-parent-interaction.component';
import { ContactParentComponent } from './contact-parent-table/contact-parent.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormsModule} from '@angular/forms';
import { genderFilterPipe } from './customPipes/genderFilter.pipe';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NameCapitalizationPipe } from './customPipes/nameCapital.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordMaskPipe } from './customPipes/passwordMask.pipe';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation-parent/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';

       // Primeng plugins
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { DetailsComponent } from './gallery-page/details/details.component';





@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ChildTableComponent, 
    FooterComponentComponent,
    GalleryPageComponent,
    genderFilterPipe,
    HomePageComponent,
    NavbarComponent,
    NameCapitalizationPipe,
    PasswordMaskPipe,
    ReservationComponent,
    RoomsComponent,
    ChildParentInteractionComponent,
    ContactParentComponent,
    DetailsComponent,
 
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    CardModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    MultiSelectModule,
    PasswordModule,
    ReactiveFormsModule,
    TableModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
