import {Injectable} from "@angular/core";
import {Office} from "./office.model";
import {Room} from "./room.model";

@Injectable()
export class AppService {
  public office: Office;
  public _extTemp: number;

  constructor() {
    this._extTemp = 10;
    let rooms: Array<Room> = [];
    rooms.push(new Room("Bureau sud-ouest", 18, 22, true, 100, true, 3));
    rooms.push(new Room("Bureau nord-ouest", 22, 22, true, 100, false, 0));
    rooms.push(new Room("Bureau ouest", 21, 22, true, 100, true, 3));

    this.office = new Office(rooms, 30, -10, {hour: 18, minute: 0}, {hour: 8, minute: 0});
  }

  addTemp() {
    this._extTemp++;
    this.office.checkExtTemp(this._extTemp);
  }

  minusTemp() {
    this._extTemp--;
    this.office.checkExtTemp(this._extTemp);
  }
}
