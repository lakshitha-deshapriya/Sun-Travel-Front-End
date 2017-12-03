import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from "../../environments/environment.prod";

@Injectable()
export class ContractService {

  baseURL = environment.baseURL;

  constructor(private http: Http) { }

  getContractData(hotelName){
    return this.http.post(this.baseURL + 'contracts/search', hotelName)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}
