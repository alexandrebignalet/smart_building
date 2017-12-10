import {Room} from "./room.model";

export class Office {
  public shouldBeClosedAuto: boolean;
  public shouldBeOpennedAuto: boolean;
  public _vigipirate: boolean;
  public _time;
  public addedHours = 0;
  public isOpen = false;
  public isCloseDueToTemp = false;

  constructor(public rooms: Array<Room>, public tooHighTemp: number, public tooLowTemp: number, public closingTime, public openningTime) {
    this.shouldBeClosedAuto = false;
    this.shouldBeOpennedAuto = false;
    this._vigipirate = false;

    this.setTime();
  }

  public checkExtTemp(temp) {
    if(temp > this.tooHighTemp || temp < this.tooLowTemp) {
      this.rooms.forEach((room: Room) => {
        this.isCloseDueToTemp = true;
        room.closeStores()
      });
    } else {
      this.rooms.forEach((room: Room) => {
        this.isCloseDueToTemp = false;
        room.openStores()
      })
    }
  }

  public get vigipirate() {
    return this._vigipirate;
  }

  public set vigipirate(activated: boolean) {
    this._vigipirate = activated;
    if (activated) {
      this.closingTime = { hour: 18, minute: 0};
      this.openningTime = { hour: 8, minute: 15};
      this.shouldBeClosedAuto = true;
      this.shouldBeOpennedAuto = true;
    } else {
      this.shouldBeClosedAuto = false;
      this.shouldBeOpennedAuto = false;
    }
  }

  public setTime() {
    let date = new Date();
    this._time = {hour: date.getHours()+this.addedHours, minute: date.getMinutes()};
    this.checkCurrentTime();
  }

  public get time() {
    return this._time;
  }

  public checkCurrentTime() {
    if(this.time.hour >= this.closingTime.hour && this.time.minute >= this.closingTime.minute && this.shouldBeClosedAuto) {
      console.log('closed');
      this.isOpen = false;
      this.closeOffice();
    } else if (!this.isCloseDueToTemp){
      console.log('open');
      this.isOpen = true;
      this.openOffice();
    }
  }

  public addOneHour() {
    this.addedHours++;
  }

  public minusOneHour() {
    this.addedHours--;
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
    });
  }

  public getIndexById(id) {
      console.log(id);
      for (let i = 0 ; i < this.rooms.length ; i++ ) {
          if (this.rooms[i].id === id) {
              return i;
          }
      }
  }

    public getNameById(id) {
        console.log(id);
        for (let i = 0 ; i < this.rooms.length ; i++ ) {
            if (this.rooms[i].id === id) {
                return this.rooms[i].name;
            }
        }
    }
}
