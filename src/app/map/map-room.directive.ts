import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mapRoom]'
})
export class MapRoomDirective {
  constructor(el: ElementRef) {
    console.log(el);
    console.log("Pipa");
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
