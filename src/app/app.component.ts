import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Office} from "./office.model";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    time: Date;
    lastHovered: '';
    lastClicked: '';
    config = {
        speed: 600,
        slidesPerView: 3,
        effect: 'coverflow',
        spaceBetween: 50,
        followFinger: false,
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: -20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
        }
    };
    index = 1;
    office: Office;

    constructor(private appService: AppService) {
        this.office = appService.office;
    }

    ngOnInit(): void {

    }

    onHoveredMapElement($event) {
        console.log($event);
        this.lastHovered = $event;
    }

    onClickedMapElement($event) {
        console.log($event);
        this.lastClicked = $event;
        this.index = Math.floor(Math.random() * (0 - 3) + 3);

        console.log(this.index);
    }
}
