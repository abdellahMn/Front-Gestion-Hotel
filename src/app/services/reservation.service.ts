import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  getResevation(datefin) {
    return this.http.post('http://127.0.0.1:8000/api/chambre/date',{date_fin:datefin});
  }
}
