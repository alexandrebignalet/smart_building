import {Office} from "./office.model";
import {Room} from "./room.model";


export class OfficeFactory {

    createOfficeScenario(scenarioNumber: number): Office {
        switch (scenarioNumber) {
            case 0:
                return this.createScenario0();
            case 1:
                return this.createScenarioIntrusion();
            default:
                return this.createScenario0();
        }
    }

    createScenario0(): Office {

        let office: Office = new Office(30, -10, {hour: 19, minute: 0}, {hour: 7, minute: 0});

        office.addedHours = 0;
        office.shouldBeClosedAuto = true;
        office.shouldBeOpennedAuto = true;
        office.checkCurrentTime();

        office.rooms.forEach((room: Room) => {
            room.initialize((Math.round((Math.random()*7)+17)), ((Math.round(Math.random()*7)+17)), Math.round(Math.random()*10));
        });

        return office;
    }

    createScenarioIntrusion(): Office {

        let office: Office = new Office(30, -10, {hour: 19, minute: 0}, {hour: 8, minute: 0});

        office.rooms.forEach((room: Room) => {
            room.initialize((Math.round((Math.random()*7)+17)), ((Math.round(Math.random()*7)+17)), Math.round(Math.random()*10));
        });

        let addHoursTimesToClose = ((office.closingTime.hour + 1) - office.time.hour);
        office.shouldBeClosedAuto = true;
        office.shouldBeOpennedAuto = true;
        office.isOpen = true;
        office.addedHours = addHoursTimesToClose;


        office.checkCurrentTime();

        setTimeout(() => {
            office.rooms[2].peopleInside = 2;
        }, 5000);

        return office;
    }

}
