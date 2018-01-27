import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../models/Reservation';
import {ReservationRoomType} from '../../../models/ReservationRoomType';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {

  reservationData: Reservation[];
  roomTypeDetails: ReservationRoomType[];

  hotelName: String;
  checkinDate: String;
  fName: String;
  lName: String;
  phone: String;
  email: String;
  pbox: String;
  region: String;
  city: String;
  country: String;
  zip: String;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationData = this.reservationService.reservationSaveData;
    console.log(this.reservationData);
    for (let reservation of this.reservationData) {
      this.roomTypeDetails.push(new ReservationRoomType(reservation.roomtype,
        reservation.noofrooms,
        reservation.noofnights,
        reservation.noofadults));
    }
    console.log(this.roomTypeDetails);
      this.hotelName = this.reservationData[0].hotelName;
      this.checkinDate = this.reservationData[0].checkindate;
      this.fName = this.reservationData[0].fname;
      this.lName = this.reservationData[0].lname;
      this.phone = this.reservationData[0].phone;
      this.email = this.reservationData[0].email;
      this.pbox = this.reservationData[0].pbox;
      this.region = this.reservationData[0].region;
      this.city = this.reservationData[0].city;
      this.country = this.reservationData[0].country;
      this.zip = this.reservationData[0].zipcode;
      console.log(this.hotelName);
      console.log(this.reservationData[0].fname);
  }

}
