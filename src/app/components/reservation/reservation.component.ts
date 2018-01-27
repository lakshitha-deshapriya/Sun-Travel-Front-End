import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationService} from '../../services/reservation.service';
import {Reservation} from '../../models/Reservation';
import {HotelService} from '../../services/hotel.service';
import {Hotel} from '../../models/Hotel';
import {RoomTypeService} from '../../services/room-type.service';
import {RoomType} from '../../models/RoomType';
import {CountryService} from '../../services/country.service';
import {Country} from '../../models/Country';
import {Availabaility} from '../../models/Availabaility';
import {Router} from '@angular/router';
import {ReservationRoomType} from '../../models/ReservationRoomType';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {ShowReservationComponent} from './show-reservation/show-reservation.component';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  ReservationSave: FormGroup;
  reservationDataArray: Reservation[]= [];

  hotels: Hotel[];
  roomTypes: RoomType[] = [];
  countries: Country[];
  availability: Availabaility;
  availabilityHotel: String;
  availabilityRoomType: String;
  availableAvailableDate: String;
  inputDisabled: boolean;

  multiRoomTypes: ReservationRoomType [] = [];

  constructor(private reservationService: ReservationService,
              private hotelService: HotelService,
              private roomTypeService: RoomTypeService,
              private countryService: CountryService,
              private router: Router,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ReservationComponent>
  ) {}

  ngOnInit() {
    this.getHotels();
    this.getCountries();

    this.availability = this.reservationService.availabilityObject;
    if (this.availability === null) {
      this.availabilityHotel = null;
      this.availabilityRoomType = null;
      this.availableAvailableDate = null;
      this.inputDisabled = false;
    }else{
      this.availabilityHotel = this.availability.ldRoomTypeByTypeId.ldContractsByContractId.ldHotelByHotelId.hotelName;
      this.availabilityRoomType = this.availability.ldRoomTypeByTypeId.type;
      this.availableAvailableDate = this.availability.availableDate.toString();
      this.inputDisabled = true;
    }

    this.ReservationSave = new FormGroup({
      'hotelName': new FormControl({value: this.availabilityHotel, disabled: this.inputDisabled }, Validators.required),
      'roomtype': new FormControl(this.availabilityRoomType, Validators.required),
      'checkindate': new FormControl({value: this.availableAvailableDate, disabled: this.inputDisabled }, Validators.required),
      'noofrooms': new FormControl(null, Validators.required),
      'noofnights': new FormControl(null, Validators.required),
      'noofadults': new FormControl(null, Validators.required),
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pbox': new FormControl(null, Validators.required),
      'region': new FormControl(null),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'zipcode': new FormControl(null)
    });

    this.onHotelSubmit();

  }

  onAdd() {
    const formValues = this.ReservationSave.value;
    this.multiRoomTypes.push(new ReservationRoomType(formValues.roomtype,
      formValues.noofrooms,
      formValues.noofnights,
      formValues.noofadults));
    this.ReservationSave.get('noofrooms').reset();
    this.ReservationSave.get('noofnights').reset();
    this.ReservationSave.get('noofadults').reset();
  }

  onSubmit(){
    let index = 0;
    for (const roomtype of this.multiRoomTypes){
      this.setReservationData(index);
      index = index + 1;
    }
    this.reservationService.SaveReservationData(this.reservationDataArray).subscribe(
      // (availability: Availabaility) => {
      //   this.availability = availability;
      // },
      // (error) => console.log(error)
    );
    //this.onClose();

    this.openDialog();
  }

  setReservationData(index){
    const formValues = this.ReservationSave.value;
    if (this.availability === null) {
      this.availableAvailableDate = formValues.checkindate.getFullYear() + '-' + (formValues.checkindate.getMonth() + 1) + '-' + formValues.checkindate.getDate();
    }
    this.reservationDataArray.push(new Reservation(
      this.availabilityHotel,
      this.multiRoomTypes[index].roomtype,
      this.availableAvailableDate,
      this.multiRoomTypes[index].noofrooms,
      this.multiRoomTypes[index].noofnights,
      this.multiRoomTypes[index].noofadults,
      formValues.fname,
      formValues.lname,
      formValues.phone,
      formValues.email,
      formValues.pbox,
      formValues.region,
      formValues.city,
      formValues.country,
      formValues.zipcode));
  }

  openDialog() {
    const dialogRef = this.dialog.open(ShowReservationComponent);

    dialogRef.afterClosed().subscribe(
      // result => {
      // this.getAllContracts();
      // this.dialog.open(ShowContractComponent);
      // }
    );
  }

  onDelete(index: number){
    this.multiRoomTypes.splice(index, 1);
  }

  onClear(){
    this.multiRoomTypes = [];
    this.ReservationSave.get('noofrooms').reset();
    this.ReservationSave.get('noofnights').reset();
    this.ReservationSave.get('noofadults').reset();
    this.ReservationSave.get('fname').reset();
    this.ReservationSave.get('lname').reset();
    this.ReservationSave.get('phone').reset();
    this.ReservationSave.get('email').reset();
    this.ReservationSave.get('pbox').reset();
    this.ReservationSave.get('region').reset();
    this.ReservationSave.get('city').reset();
    this.ReservationSave.get('country').reset();
    this.ReservationSave.get('zipcode').reset();
  }

  getHotels(){
    this.hotelService.getHotels().subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
      },
      (error) => console.log(error)
    );
  }

  getCountries(){
    this.countryService.getCountries().subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      },
      (error) => console.log(error)
    );
  }

  onHotelSubmit(){
    this.roomTypeService.getRoomTypesByHotelName(this.availabilityHotel).subscribe(
      (roomtypes: RoomType[]) => {
        this.roomTypes = roomtypes;
      },
      (error) => console.log(error)
    );
  }

  onClose() {
    this.dialogRef.close();
  }

}
