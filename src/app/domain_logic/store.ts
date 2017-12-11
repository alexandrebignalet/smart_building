export class Store {
    constructor(public isOpen: boolean, public openness: number){
        if(!isOpen) this.openness = 0;
    }
}
