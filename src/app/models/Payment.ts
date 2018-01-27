import {Accommodation} from './Accommodation';

export interface Payment{
  paymentId: number;
  amount: number;
  paymentDate: Date;
  ldAccommodationByAccommodationId: Accommodation;
}
