import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';

import { HomeBestRoomComponent } from './components/home-best-room/home-best-room.component';
import { HomeOurServecesComponent } from './components/home-our-serveces/home-our-serveces.component';
import { HomeSaysAboutUsComponent } from './components/home-says-about-us/home-says-about-us.component';
import { HomeReservationComponent } from './components/home-reservation/home-reservation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageReservationComponent } from './components/page-reservation/page-reservation.component';
import { HomeComponent } from './components/home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RoomDetailsComponent } from './components/room-details/room-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    HomeBestRoomComponent,
    HomeOurServecesComponent,
    HomeSaysAboutUsComponent,
    HomeReservationComponent,
    PageReservationComponent,
    HomeComponent,
    RoomDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
