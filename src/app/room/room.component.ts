import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Room} from "../domain_logic/room.model";
import {NgbTabset} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

    @Input() room: Room;
    @ViewChild('videoPlayer') videoplayer: any;

    constructor() {
    }

    ngOnInit() {
        console.log(this.room);
    }

    tabEvent($event) {
        console.log($event);
    }



    toggleVideo(event: any) {
        if (this.videoplayer.nativeElement.paused) {
            this.videoplayer.nativeElement.play();
        } else {
            this.videoplayer.nativeElement.pause();
        }

    }

}
