import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {Availabaility} from '../models/Availabaility';

@Pipe({
  name: 'filterRoomTypes'
})

@Injectable()
export class RoomTypeFilterPipe implements PipeTransform {

  transform( availableRoomTypes: Availabaility[], hotelName ): any {
    return null;
  }


// .filter( roomType => roomType.contractId === contractId );
}
