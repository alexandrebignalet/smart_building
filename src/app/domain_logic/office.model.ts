import {Room} from "./room.model";

export class Office {
    public rooms: Array<Room> = [];
    public shouldBeClosedAuto: boolean;
    public shouldBeOpennedAuto: boolean;
    public shouldBeClosedAutoDueToTemp: boolean;
    public _vigipirate: boolean;
    public _time;
    public addedHours = 0;
    public isOpen = false;
    public isCloseDueToTemp = false;
    public intrusion = { state: false, roomsName: []};

    public vigipirateOpenningTime = {hour: 8, minute: 15};
    public vigipirateClosingTime = {hour: 18, minute: 0};

    constructor(public tooHighTemp: number, public tooLowTemp: number, public closingTime, public openningTime) {
        this.shouldBeClosedAuto = false;
        this.shouldBeOpennedAuto = false;
        this.shouldBeClosedAutoDueToTemp = false;
        this.isOpen = false;
        this._vigipirate = false;

        this.rooms.push(new Room('Bureau 3', 'bureau3', 1, 1));
        this.rooms.push(new Room('Bureau 2', 'bureau2', 1, 1));
        this.rooms.push(new Room('Bureau 1', 'bureau1', 1, 1));
        this.rooms.push(new Room('Open-space 1', 'open-space1', 4, 4));
        this.rooms.push(new Room('Salle de projet 2', 'open-space2', 5, 6));
        this.rooms.push(new Room('Sas', 'sas1', 1, 0));
        this.rooms.push(new Room('Hall', 'hall1', 1, 0));
        this.rooms.push(new Room('Reproduction', 'repro', 1, 0));
        this.rooms.push(new Room('Couloir 1', 'degt1', 2, 0));
        this.rooms.push(new Room('Couloir 2', 'corridor1', 2, 0));
        this.rooms.push(new Room('Toilettes', 'toilets1', 6, 0));
        this.rooms.push(new Room('Atelier fabrication', 'atelier-fab1', 2, 3));
        this.rooms.push(new Room('Chaine de production', 'chaine-production1', 7, 4));
        this.rooms.push(new Room('Salle projet', 'salle-projet1', 5, 6));
        this.rooms.push(new Room('Local maintenance', 'local-men1', 1, 0));
        this.rooms.push(new Room('Salle de réunion', 'reunion1', 1, 2));

        this.setTime();
    }

    public checkExtTemp(temp) {
        if(!this.shouldBeClosedAutoDueToTemp) return;

        if (temp > this.tooHighTemp || temp < this.tooLowTemp) {
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
            this.closingTime = this.vigipirateClosingTime;
            this.openningTime = this.vigipirateOpenningTime;
            this.shouldBeClosedAuto = true;
            this.shouldBeOpennedAuto = true;
        } else {
            this.shouldBeClosedAuto = false;
            this.shouldBeOpennedAuto = false;
        }
    }

    public setTime() {
        let date = new Date();
        this._time = {hour: date.getHours() + this.addedHours, minute: date.getMinutes()};
        this.checkCurrentTime();
    }

    public get time() {
        return this._time;
    }

    public isDuringOpenningHours(): boolean {

        if ( this.time.hour >= this.openningTime.hour && this.time.hour <= this.closingTime.hour) {

            if( this.time.hour === this.openningTime.hour) {
                return this.time.minute >= this.openningTime.minute;
            }

            if ( this.time.hour === this.closingTime.hour ) {
                return this.time.minute <= this.closingTime.minute;
            }

            return true;
        }

        return false;
    }

    public checkCurrentTime() {
        if (!this.isDuringOpenningHours()) {
            if(this.shouldBeClosedAuto && this.isOpen) {
                this.isOpen = false;
                this.closeOffice();
            }
        } else if (!this.isCloseDueToTemp && !this.isOpen && this.shouldBeOpennedAuto) {
            this.isOpen = true;
            this.openOffice();
        }

        this.checkIntrusion();
    }

    checkIntrusion(): void {
        if(this.isOpen) {
            this.intrusion.state = false;
            this.intrusion.roomsName = [];
            return;
        }

        this.intrusion.state = true;
        this.intrusion.roomsName = [];

        for(let i = 0 ; i < this.rooms.length; i++) {
            if(this.rooms[i].peopleInside > 0) {
                this.intrusion.state = true;
                this.intrusion.roomsName.push(this.rooms[i].name);
            }
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
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].id === id) {
                return i;
            }
        }
    }

    public getRoomById(id) {
        for (let i = 0 ; i < this.rooms.length ; i++ ) {
            if (this.rooms[i].id === id) {
                return this.rooms[i];
            }
        }
    }
}
