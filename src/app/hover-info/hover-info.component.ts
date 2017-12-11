import {Component, Input, OnInit } from '@angular/core';
import {Room} from "../room.model";



@Component({
    selector: 'app-hover-info-component',
    templateUrl: './hover-info.component.html',
})
export class HoverInfoComponent implements OnInit {

    @Input() room: Room;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.room);
        console.log('Hover info component init');
    }



}
