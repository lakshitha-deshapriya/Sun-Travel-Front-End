import {Hotel} from "./Hotel";

export interface Contract{
  contractId: number;
  startDate: Date;
  endDate: Date;
  ldHotelByHotelId: Hotel;
}
