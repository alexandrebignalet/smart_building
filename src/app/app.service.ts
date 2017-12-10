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
        rooms.push(new Room('Bureau 3', 'bureau3', 18, 22, true, 100, true, 3));
        rooms.push(new Room('Bureau 2', 'bureau2', 18, 22, true, 100, true, 3));
        rooms.push(new Room('Bureau 1', 'bureau1', 18, 22, true, 100, true, 3));
        rooms.push(new Room('Open-space 1', 'open-space1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Open-space 2', 'open-space2', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Sas', 'sas1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Hall', 'hall1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Reproduction', 'repro', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Couloir 1', 'degt1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Couloir 2', 'corridor1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Toilettes', 'toilets1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Atelier fabrication', 'atelier-fab1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Chaine de production', 'chaine-production1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Salle projet', 'salle-projet1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Local maintenance', 'local-men1', 22, 22, true, 100, false, 0));
        rooms.push(new Room('Salle de réunion', 'reunion1', 22, 22, true, 100, false, 0));

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
