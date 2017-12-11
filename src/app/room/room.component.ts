import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Room} from "../domain_logic/room.model";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() room: Room;

  constructor() {}

  ngOnInit() {
    console.log(this.room);
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
