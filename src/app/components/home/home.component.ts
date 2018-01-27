import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {Availabaility} from '../../models/Availabaility';
import {Hotel} from '../../models/Hotel';
import {MatDialog} from '@angular/material/dialog';
import {ReservationComponent} from '../reservation/reservation.component';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupForm: FormGroup;
  availabilities: Availabaility[];
  availableHotels: Hotel[];
  availabilityObject: Availabaility;

  search_date: String;
  no_nights: number;
  no_rooms: number;
  no_adults: number;

  noOfRoomTypes = 0;
  cardIndex = 0;

  constructor(private searchService: SearchService,
              private reservationService: ReservationService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'nights': new FormControl(1),
      'rooms': new FormControl(0),
      'adults': new FormControl(0)
    });
  }

  checkHotelRoomTypes(availabilityHotel, cardHotel, cardIndex) {
    if (this.cardIndex !== cardIndex + 1) {
      this.noOfRoomTypes = 0;
      this.cardIndex = cardIndex + 1;
    }

    if (availabilityHotel === cardHotel) {
      this.noOfRoomTypes++;
      return true;
    }else {
      return false;
    }
  }

  setSearchData(){
    const formValues = this.signupForm.value;
    this.search_date = formValues.date.getFullYear() + '-' + (formValues.date.getMonth() + 1) + '-' + formValues.date.getDate();
    this.no_nights = formValues.nights;
    this.no_rooms = formValues.rooms;
    this.no_adults = formValues.adults;
  }

  onSubmit() {
    this.setSearchData();
    this.searchService.getSearchData(this.search_date, this.no_nights, this.no_rooms, this.no_adults).subscribe(
      response => {
        this.availabilities = response[0];
        this.availableHotels = response[1];
      },
      (error) => console.log(error)
    );
  }

  onClick(availability){
    this.availabilityObject = availability;

    this.reservationService.availabilityObject = this.availabilityObject;

    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReservationComponent);

    dialogRef.afterClosed().subscribe(
      // result => {
      // this.getAllContracts();
      // this.dialog.open(ShowContractComponent);
    // }
    );
  }
}
