export class Light {
    constructor(public isOn: boolean, public intensity: number){
        if(!isOn) this.intensity = 0;
    }
}
