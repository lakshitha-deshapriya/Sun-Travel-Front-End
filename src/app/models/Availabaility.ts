import {RoomType} from './RoomType';

export class Availabaility{
  availabilityId: number;
  availableDate: Date;
  availableNoRooms: number;
  ldRoomTypeByTypeId: RoomType;

  constructor(availabilityId, availableDate, availableNoRooms, ldRoomTypeByTypeId) {
    this.availabilityId = availabilityId;
    this.availableDate = availableDate;
    this.availableNoRooms = availableNoRooms;
    this.ldRoomTypeByTypeId = ldRoomTypeByTypeId;
  }
}
