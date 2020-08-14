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
import { HomeLuxuryRoomComponent } from './components/home-luxury-room/home-luxury-room.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
   
    HomeBestRoomComponent,
    HomeOurServecesComponent,
    HomeSaysAboutUsComponent,
    HomeReservationComponent,
    HomeLuxuryRoomComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
