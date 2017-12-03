import {Contract} from "./Contract";

export interface RoomType{
  typeId: number;
  type: String;
  noOfRooms: number;
  maxAdults: number;
  price: number;
  markup: number;
  ldContractsByContractId: Contract;
}
