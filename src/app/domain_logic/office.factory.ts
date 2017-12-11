import {Office} from "./office.model";
import {Room} from "./room.model";


export class OfficeFactory {

    createOfficeScenario(scenarioNumber: number): Office {
        switch (scenarioNumber) {
            case 0:
                return this.createScenario0();
            default:
                return this.createScenario0();
        }
    }

    createScenario0(): Office {

        let office: Office = new Office(30, -10, {hour: 19, minute: 0}, {hour: 7, minute: 0});

        office.rooms.forEach((room: Room) => {
            room.initialize(18, 22, 5);
        });

        return office;
    }

}
