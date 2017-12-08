
export class Room {

  constructor(
    public name: string,
    public temp: number,
    public thermostat: number,
    public storesOpen: boolean,
    public storesOpenness: number,
    public areLightsOn: boolean,
    public peopleInside: number
  ) {}

  public isPeopleInside(): boolean {
    return this.peopleInside > 0;
  }

  public switchLightsOff():void {
    this.areLightsOn = false;
  }

  public closeStores(): void {
    this.storesOpen = false;
    this.storesOpenness = 0;
    if(!this.areLightsOn) this.switchLightsOn();
  }

  public switchLightsOn():void {
    if(this.isPeopleInside()) {
      this.areLightsOn = true;
    }
  }

  public openStores(): void {
      this.storesOpen = true;
      this.storesOpenness = 100;
  }
}
