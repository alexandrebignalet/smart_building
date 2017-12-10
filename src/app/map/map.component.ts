import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {


  @Output() OnHovered = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onmouseenter($event) {
    console.log('Child : ' + $event);
    if ($event) {
      this.OnHovered.emit($event);
    }

  }

}
