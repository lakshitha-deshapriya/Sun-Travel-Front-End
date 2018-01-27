import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Http, Response } from '@angular/http';
import {Reservation} from '../models/Reservation';
import {Availabaility} from "../models/Availabaility";

@Injectable()
export class ReservationService {

  availabilityObject: Availabaility = null;

  reservationSaveData: Reservation[] = [];

  baseURL = environment.baseURL;

  constructor(private http: Http) { }

  SaveReservationData(formData){
    this.reservationSaveData.push(formData);
    console.log(this.reservationSaveData);
    return this.http.post(this.baseURL + 'reservation/reserve', formData)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}
