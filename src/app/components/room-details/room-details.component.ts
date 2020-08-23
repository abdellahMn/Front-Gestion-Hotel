import { ReservationService } from './../../services/reservation.service';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  checkForm = new FormGroup({
    arriver: new FormControl(this.activatedRoute.snapshot.queryParamMap.get('arriver'), [Validators.required ,Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{4}')]),
    quitter: new FormControl(this.activatedRoute.snapshot.queryParamMap.get('quitter'), [Validators.required,Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{4}')]),
    adult: new FormControl(this.activatedRoute.snapshot.queryParamMap.get('adult'), [Validators.required]),
    enfants: new FormControl(this.activatedRoute.snapshot.queryParamMap.get('enfants'), [Validators.required]),
  })
  chambre;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationService,
  ) {

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.getChambreById(id);
  }

  getChambreById(id) {
    this.reservationService.getChambre(id).subscribe(chambre => {
      this.chambre = chambre;
      console.log(chambre);

    });
  }

}
