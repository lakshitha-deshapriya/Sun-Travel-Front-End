import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class SearchService {

  baseURL= environment.baseURL;

  constructor(private http: Http) {  }

  getSearchData(search_date, no_nights, no_rooms, no_adults){
    return this.http.get(this.baseURL + 'availability/search/' + search_date + '/' + no_nights + '/' + no_rooms + '/' + no_adults)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

}
