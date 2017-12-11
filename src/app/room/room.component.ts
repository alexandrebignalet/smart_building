import {Component, Input, OnInit} from '@angular/core';
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

}
