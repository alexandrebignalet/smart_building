import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {


  @Output() OnHovered = new EventEmitter<String>();
  @Output() OnClicked = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onhovered($event) {
    if ($event) {
      this.OnHovered.emit($event);
    }

  }

  onclicked($event) {
      console.log("Event clicked : " + $event);
      if ($event) {
          this.OnClicked.emit($event);
      }
  }

}
