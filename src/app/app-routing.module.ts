import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageReservationComponent } from './components/page-reservation/page-reservation.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent, },
  { path: "reservation", component: PageReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
