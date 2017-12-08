import {Room} from "./room.model";

export class Office {
  constructor(public rooms: Array<Room>, public tooHighTemp: number, public tooLowTemp: number) {
    rooms.forEach((room: Room) => {
      room.office = this;
    })
  }

  public closeOffice() {
    this.rooms.forEach((room: Room) => {
      room.peopleInside = 0;
      room.closeStores();
      room.switchLightsOff();
    })
  }

  public openOffice() {
    this.rooms.forEach((room: Room) => {
      room.openStores();
      room.switchLightsOn();
    })
  }
}
