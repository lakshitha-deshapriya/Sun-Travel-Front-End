import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment.prod';
import 'rxjs/Rx';
import {AddContract} from '../models/AddContract';

@Injectable()
export class ContractService {

  baseURL = environment.baseURL;
  contractdataArray: AddContract[];
  responseMsg: string;

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

  getAllContracts(){
    return this.http.get(this.baseURL + 'contracts/tabledata')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  SaveContractData(formData){
    this.contractdataArray = formData;
    return this.http.post(this.baseURL + 'contracts/savecontract', formData)
      .map(
        (response: Response) => {
          const data = response.json();
          this.responseMsg = data;
          return data;
        }
      );
  }
}
