import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Http, Response} from '@angular/http';

@Injectable()
export class HotelService {

  baseURL = environment.baseURL;

  constructor(private http: Http) { }

  getHotels(){
    return this.http.get(this.baseURL + 'hotels')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

}
