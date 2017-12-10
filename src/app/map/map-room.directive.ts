import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[mapRoom]'
})
export class MapRoomDirective {
  @Output() OnTest = new EventEmitter<String>();

  svgElement: any;

  constructor(el: ElementRef) {

    this.svgElement = el;

    console.log(el.nativeElement.setAttributeNS(null, 'style', 'fill:white'));

    el.nativeElement.setAttributeNS(null, 'opacity', '0.7');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.OnTest.emit(this.svgElement.nativeElement.id);
    this.svgElement.nativeElement.setAttributeNS(null, 'style', 'fill:black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.svgElement.nativeElement.setAttributeNS(null, 'style', 'fill:white');
  }


  private highlight(color: string) {

  }
}
