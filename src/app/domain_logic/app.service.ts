import {Injectable} from "@angular/core";
import {Office} from "./office.model";
import {OfficeFactory} from "./office.factory";
import {Subject} from "rxjs";
import {PushNotification, PushNotificationsService} from "ng-push";

@Injectable()
export class AppService {
    public office: Office;
    public _extTemp: number;
    public officeFactory = new OfficeFactory();
    public scenarChoosen = 0;

    public officeChange: Subject<Office> = new Subject<Office>();

    constructor(private pushNotif: PushNotificationsService) {
        this.changeScenario();
    }

    addTemp() {
        this._extTemp++;
        this.office.checkExtTemp(this._extTemp);
    }

    minusTemp() {
        this._extTemp--;
        this.office.checkExtTemp(this._extTemp);
    }

    changeScenario(): void {
        this.scenarChoosen = this.scenarChoosen === 0 ? 1 : 0;
        this._extTemp = Math.round(Math.random()*15);
        this.office = this.officeFactory.createOfficeScenario(this.scenarChoosen);
        this.officeChange.next(this.office);
    }
}
