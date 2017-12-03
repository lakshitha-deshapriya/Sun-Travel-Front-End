import {Address} from "./Address";

export interface Hotel{
  hotelId: number;
  hotelName: string;
  description: string;
  ldAddressByAddressId: Address;
}
