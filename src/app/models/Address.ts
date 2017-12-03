import {City} from "./City";

export interface Address{
  addressId: number;
  postBoxNo: string;
  region: string;
  zipcode: number;
  ldCityByCityId: City;
}
