import {Component, Input, OnInit } from '@angular/core';



@Component({
    selector: 'app-hover-info-component',
    templateUrl: './hover-info.component.html',
})
export class HoverInfoComponent implements OnInit {


    constructor() {
    }

    ngOnInit(): void {
        console.log('Hover info component init');
    }



}
