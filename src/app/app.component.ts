import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  time = {hour: 13, minute: 30};
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
      slideShadows : false,
    },
    pagination: {
      el: '.swiper-pagination',
    }
  };
  index = 1;
}
