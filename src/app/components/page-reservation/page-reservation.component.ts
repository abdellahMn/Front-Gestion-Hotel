import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  })
  chambres:any=[];

  page = 1;

  constructor(private route : ActivatedRoute,
              private reservationservice: ReservationService

    ) { }

  ngOnInit(): void {
    this.getChambreByDate();
  }
  getChambreByDate(){
    this.reservationservice.getResevation(this.checkForm.value.arriver).subscribe((chambres)=>{
       this.chambres=chambres;
       console.log(this.chambres);

    })
  }

}
