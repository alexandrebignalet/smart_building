import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Room} from "../domain_logic/room.model";



@Component({
    selector: 'app-hover-info-component',
    templateUrl: './hover-info.component.html',
    styleUrls: ['./hover-info.scss']
})
export class HoverInfoComponent implements OnInit, OnChanges {

    @Input() room: Room;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.room);
        console.log('Hover info component init');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }



}
