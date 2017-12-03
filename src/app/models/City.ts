import {Country} from "./Country";

export interface City{
  cityId: number;
  cityName: string;
  ldCountryByCountryId: Country;
}
