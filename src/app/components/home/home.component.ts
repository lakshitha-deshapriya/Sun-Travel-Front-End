import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {Availabaility} from '../../models/Availabaility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupForm: FormGroup;
  getdata = false;
  availabilities: Availabaility[];

  search_date: Date;
  no_nights: number;
  no_rooms: number;
  no_adults: number;
  id=0;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'nights': new FormControl(0),
      'rooms': new FormControl(0),
      'adults': new FormControl(0)
    });
  }

  setSearchData(){
    const formValues = this.signupForm.value;
    this.search_date = formValues.date;
    this.no_nights = formValues.nights;
    this.no_rooms = formValues.rooms;
    this.no_adults = formValues.adults;
  }

  onSubmit() {
    this.setSearchData();
    this.searchService.getSearchData(this.search_date, this.no_nights, this.no_rooms, this.no_adults).subscribe(
      (availabilities: Availabaility[]) => {
        this.availabilities = availabilities;
      },
      (error) => console.log(error)
    );
    this.getdata = true;
  }
}
