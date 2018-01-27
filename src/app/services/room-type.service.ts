import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Http, Response} from '@angular/http';

@Injectable()
export class RoomTypeService {

  baseURL = environment.baseURL;

  constructor(private http: Http) { }

  getRoomTypes(){
    return this.http.get(this.baseURL + 'roomtype')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  getRoomTypesByHotelName(hotelName){
    return this.http.get(this.baseURL + 'roomtype/searchByHotel/' + hotelName)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

}
