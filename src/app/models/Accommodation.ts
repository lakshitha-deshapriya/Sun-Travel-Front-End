import {Customer} from './Customer';

export interface Accommodation{
  accommodationId: number;
  checkInDate: Date;
  ldCustomerByCustomerId: Customer;
}
