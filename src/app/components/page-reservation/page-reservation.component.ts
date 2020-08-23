import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css']
})
export class PageReservationComponent implements OnInit {
  checkForm = new FormGroup({
    arriver: new FormControl(this.route.snapshot.queryParamMap.get('arriver'), [Validators.required ,Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{4}')]),
    quitter: new FormControl(this.route.snapshot.queryParamMap.get('quitter'), [Validators.required,Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{4}')]),
    adult: new FormControl(this.route.snapshot.queryParamMap.get('adult'), [Validators.required]),
    enfants: new FormControl(this.route.snapshot.queryParamMap.get('enfants'), [Validators.required]),
    email: new FormControl(this.route.snapshot.queryParamMap.get('email'), [Validators.required]),
  })


  page = 1;
  chambres:any=[]
  constructor(private route : ActivatedRoute,
              private router : Router,
              private reservationservice: ReservationService

    ) { }

  ngOnInit(): void {
    this.getChambreByDate();
  }
  getChambreByDate(){
    this.reservationservice.getResevation(this.checkForm.value.arriver).subscribe(chambres=>{
       this.chambres=chambres;
       console.log(chambres);

    })
  }
  navigate(id){
    this.router.navigate(['room',id,'booking'], {
      queryParams: {
        arriver: this.checkForm.value.arriver,
        quitter: this.checkForm.value.quitter,
        adult: this.checkForm.value.adult,
        enfants: this.checkForm.value.enfants,
        email: this.checkForm.value.email
      } });
  }

}
