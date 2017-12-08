import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public time;
  constructor(public appService: AppService) { }

  ngOnInit() {
    setInterval(() => {         //replaced function() by ()=>
      this.appService.office.setTime();
      this.time = this.appService.office.time;
    }, 1000);
  }

  addHours() {
    this.appService.office.addOneHour();
  }

  onRightClickHours(event) {
    event.preventDefault();
    this.appService.office.minusOneHour();
  }

  addTemp() {
    this.appService.addTemp();
  }

  onRightClickTemp(event) {
    event.preventDefault();
    this.appService.minusTemp();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
}
