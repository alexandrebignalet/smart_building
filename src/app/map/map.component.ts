import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
  mouseLeave(s) {
    console.log(s);
  }
  mouseEnter(s) {
    console.log(s);
  }
}
