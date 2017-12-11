import {Light} from "./light";
import {Store} from "./store";

export class Room {

    public temp: number;
    public thermostat: number;
    public peopleInside: number;
    public lights: Array<Light> = [];
    public stores: Array<Store> = [];

    constructor(public name: string, public id: string, public lightsNumber: number, public storesNumber) {
        for (let i = 0 ; i < this.lightsNumber; i++) {
            this.lights.push(new Light(false, 0));
        }

        for(let i = 0 ; i < this.storesNumber; i++) {
            this.stores.push(new Store(false, 0));
        }
    }

    public initialize(temp: number,
                      thermostat: number,
                      peopleInside: number) {

        this.temp = temp;
        this.thermostat = thermostat;
        this.peopleInside = peopleInside;

        for (let i = 0 ; i < this.lights.length; i++) {
            this.lights[i].isOn = this.isPeopleInside();
            this.lights[i].intensity = this.isPeopleInside() ? 100 : 0;
        }

        for (let i = 0 ; i < this.stores.length; i++) {
            this.stores[i].isOpen = this.isPeopleInside();
            this.stores[i].openness = this.isPeopleInside() ? 100 : 0;
        }
    }

    public isPeopleInside(): boolean {
        return this.peopleInside > 0;
    }

    public areLightsOn() {
        for (let i = 0 ; i < this.lights.length; i++) {
            if(!this.lights[i].isOn) return false;
        }
        return true;
    }

    public areStoresOpen() {
        for (let i = 0 ; i < this.stores.length; i++) {
            if(!this.stores[i].isOpen) return false;
        }
        return true;
    }

    public switchLightsOff(): void {
        for (let i = 0 ; i < this.lights.length; i++) {
            this.lights[i].isOn = false;
            this.lights[i].intensity = 0;
        }
    }

    public closeStores(): void {
        for (let i = 0 ; i < this.stores.length; i++) {
            this.stores[i].isOpen = false;
            this.stores[i].openness = 0;
        }
        if(!this.areLightsOn()) this.switchLightsOn();
    }

    public switchLightsOn(): void {
        if (this.isPeopleInside()) {
            for (let i = 0 ; i < this.lights.length; i++) {
                this.lights[i].isOn = true;
                this.lights[i].intensity = 100;
            }
        }
    }

    public openStores(): void {
        for (let i = 0 ; i < this.stores.length; i++) {
            this.stores[i].isOpen = true;
            this.stores[i].openness = 100;
        }
    }
}
