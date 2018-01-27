import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../services/contract.service';
import {Router} from '@angular/router';
import {Hotel} from '../../../models/Hotel';
import {HotelService} from '../../../services/hotel.service';
import {CountryService} from '../../../services/country.service';
import {Country} from '../../../models/Country';
import {AddContract} from '../../../models/AddContract';
import {MultipleRoomType} from '../../../models/MultipleRoomType';
import {MatDialogRef} from '@angular/material/dialog';
import {ContractsComponent} from '../contracts.component';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  addContract: FormGroup;
  response: String;

  hotels: Hotel[];
  countries: Country[];
  contractdataArray: AddContract[] = [];

  multiRoomTypes: MultipleRoomType [] = [];

  constructor(private contractService: ContractService,
              private hotelService: HotelService,
              private countryService: CountryService,
              public dialogRef: MatDialogRef<AddContractComponent>
              ) { }

  ngOnInit() {
    this.getCountries();
    this.getHotels();

    this.addContract = new FormGroup({
      'hotelName': new FormControl(null, Validators.required),
      'roomType': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, Validators.required),
      'endDate': new FormControl(null, Validators.required),
      'noofrooms': new FormControl(null, Validators.required),
      'maxAdults': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'markup': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pbox': new FormControl(null, Validators.required),
      'region': new FormControl(null),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'zipcode': new FormControl(null)
    });


  }

  onAdd() {
    const formValues = this.addContract.value;
    this.multiRoomTypes.push(new MultipleRoomType(formValues.roomType,
      formValues.noofrooms,
      formValues.maxAdults,
      formValues.price,
      formValues.markup));
    this.addContract.get('roomType').reset();
    this.addContract.get('noofrooms').reset();
    this.addContract.get('maxAdults').reset();
    this.addContract.get('price').reset();
    this.addContract.get('markup').reset();
  }

  onSubmit() {
    let index = 0;
    for (const roomtype of this.multiRoomTypes){
      this.setcontractData(index);
      index = index + 1;
    }
    this.contractService.SaveContractData(this.contractdataArray).subscribe(
      (response: String) => {
        this.response = response;
      },
      (error) => console.log(error)
    );
    this.onClose();
  }

  setcontractData(index) {
    const formValues = this.addContract.value;
    this.contractdataArray.push(new AddContract(
      formValues.hotelName,
      this.multiRoomTypes[index].roomType,
      formValues.startDate.getFullYear() + '-' + (formValues.startDate.getMonth() + 1) + '-' + formValues.startDate.getDate(),
      formValues.endDate.getFullYear() + '-' + (formValues.endDate.getMonth() + 1) + '-' + formValues.endDate.getDate(),
      this.multiRoomTypes[index].noOfRooms,
      this.multiRoomTypes[index].maxAdults,
      this.multiRoomTypes[index].price,
      this.multiRoomTypes[index].markup,
      formValues.phone,
      formValues.email,
      formValues.pbox,
      formValues.region,
      formValues.city,
      formValues.country,
      formValues.zipcode,
      null));
  }

  onDelete(index: number) {
    this.multiRoomTypes.splice(index, 1);
  }

  onClear() {
    this.multiRoomTypes = [];
    this.addContract.reset();
  }

  onClose() {
   this.dialogRef.close();
  }

  getHotels() {
    this.hotelService.getHotels().subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
      },
      (error) => console.log(error)
    );
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      },
      (error) => console.log(error)
    );
  }
}
