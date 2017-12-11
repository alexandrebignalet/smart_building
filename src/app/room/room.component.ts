import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Room} from "../domain_logic/room.model";

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnChanges {

    @Input() room: Room;


    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
    }

    ngOnInit() {
    }

    @ViewChild('videoPlayer') videoplayer: any;

    toggleVideo(event: any) {
        if (this.videoplayer.nativeElement.paused) {
            this.videoplayer.nativeElement.play();
        } else {
            this.videoplayer.nativeElement.pause();
        }

    }

}
