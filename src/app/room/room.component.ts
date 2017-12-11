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

    videoLink: String;

    constructor() {
    }

    ngOnInit() {
        console.log(this.room);
        this.videoLink = this.getRandomVid();
    }

    tabChangeEvent($event) {

        const splitRes = $event.nextId.split('-');
        if (splitRes[1] === 'video') {
            setTimeout(() => {
                console.log(this.videoLink );
                this.videoplayer.nativeElement.play();
            }, 300);

        }
    }

    getRandomVid() {
        const link = '/assets/videos/v' + (Math.floor(Math.random() * (3 - 0))) + '.mp4';

        return link;
    }



    toggleVideo(event: any) {
        if (this.videoplayer.nativeElement.paused) {
            this.videoplayer.nativeElement.play();
        } else {
            this.videoplayer.nativeElement.pause();
        }

    }

}
