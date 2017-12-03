import {RoomType} from './RoomType';

export interface Availabaility{
  availabilityId: number;
  availableDate: Date;
  availableNoRooms: number;
  ldRoomTypeByTypeId: RoomType;
}
