import {Injectable} from "@angular/core";
import {Office} from "./office.model";
import {OfficeFactory} from "./office.factory";

@Injectable()
export class AppService {
    public office: Office;
    public _extTemp: number;
    public officeFactory = new OfficeFactory();

    constructor() {
        this.changeScenario(10, 0);
    }

    addTemp() {
        this._extTemp++;
        this.office.checkExtTemp(this._extTemp);
    }

    minusTemp() {
        this._extTemp--;
        this.office.checkExtTemp(this._extTemp);
    }

    changeScenario(temp: number, number: number): void {
        this._extTemp = temp;
        this.office = this.officeFactory.createOfficeScenario(number);
    }
}
