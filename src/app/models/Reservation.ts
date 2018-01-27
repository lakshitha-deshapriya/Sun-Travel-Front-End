export class Reservation{
  hotelName: String;
  roomtype: String;
  checkindate: String;
  noofrooms: number;
  noofnights: number;
  noofadults: number;
  fname: String;
  lname: String;
  phone: String;
  email: String;
  pbox: String;
  region: String;
  city: String;
  country: String;
  zipcode: String;

  constructor(hotelName, roomtype, checkindate, noofrooms, noofnights, noofadults, fname, lname, phone, email, pbox, region, city, country, zipcode) {
    this.hotelName = hotelName;
    this.roomtype = roomtype;
    this.checkindate = checkindate;
    this.noofrooms = noofrooms;
    this.noofnights = noofnights;
    this.noofadults = noofadults;
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.email = email;
    this.pbox = pbox;
    this.region = region;
    this.city = city;
    this.country = country;
    this.zipcode = zipcode;
  }
}
