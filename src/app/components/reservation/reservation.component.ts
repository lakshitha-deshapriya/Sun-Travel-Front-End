import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  saveForm: FormGroup;
  getdata = false;

  constructor() {}

  ngOnInit() {
    this.saveForm = new FormGroup({
      'hotelName': new FormControl(null)
    });
  }
  onSubmit(){
    this.getdata = true;
  }

}
