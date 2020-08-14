import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home-reservation',
  templateUrl: './home-reservation.component.html',
  styleUrls: ['./home-reservation.component.css']
})
export class HomeReservationComponent implements OnInit {

  checkForm = new FormGroup({
    arriver: new FormControl('', [Validators.required]),
    quitter: new FormControl('', [Validators.required]),
    adult: new FormControl('', [Validators.required]),
    enfants: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    availability: new FormControl('')
  })

  constructor() {
    this.checkForm.controls['enfants'].setValue(0, {onlySelf: true});
    this.checkForm.controls['adult'].setValue(1, {onlySelf: true});

  }

  ngOnInit(): void {
  }
  onSubmit() {

  }

}
