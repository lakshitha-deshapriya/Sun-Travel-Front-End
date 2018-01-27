import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Http, Response } from '@angular/http';

@Injectable()
export class CountryService {

  baseURL = environment.baseURL;

  constructor(private http: Http) { }

  getCountries(){
    return this.http.get(this.baseURL + 'countries')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

}
