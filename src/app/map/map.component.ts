import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    if ( window.svgDocument == null ) {

      //let svgDoc = evt.target.ownerDocument;
      let colour = "green"
      let rooms = document.getElementsByClassName("map-room");


    }

  }
}
