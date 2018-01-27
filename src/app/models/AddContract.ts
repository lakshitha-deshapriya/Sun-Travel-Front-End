import {MultipleRoomType} from './MultipleRoomType';

export class AddContract{
  hotelName: String;
  roomType: String;
  startDate: Date;
  endDate: Date;
  noOfRooms: number;
  maxAdults: number;
  price: number;
  markup: number;
  phone: String;
  email: String;
  pbox: String;
  region: String;
  city: String;
  country: String;
  zipcode: String;
  description: String;

  constructor(hotelName, roomType, startDate, endDate, noOfRooms, maxAdults, price, markup, phone, email, pbox, region, city, country, zipcode, description) {
    this.hotelName = hotelName;
    this.roomType = roomType;
    this.startDate = startDate;
    this.endDate = endDate;
    this.noOfRooms = noOfRooms;
    this.maxAdults = maxAdults;
    this.price = price;
    this.markup = markup;
    this.phone = phone;
    this.email = email;
    this.pbox = pbox;
    this.region = region;
    this.city = city;
    this.country = country;
    this.zipcode = zipcode;
    this.description = description;
  }
}
