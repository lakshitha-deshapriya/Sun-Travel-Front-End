import {Address} from './Address';

export interface Customer{
  customerId: number;
  fName: String;
  lName: String;
  phoneNumber: String;
  email: String;
  markup: number;
  ldAddressByAddressId: Address;
}
