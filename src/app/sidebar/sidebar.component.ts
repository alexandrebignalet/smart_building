import {Component, Input, OnInit, Output} from '@angular/core';
import {Office} from "../office.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() office: Office;

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
