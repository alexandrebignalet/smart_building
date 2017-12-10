import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mapRoom]'
})
export class MapRoomDirective {

  svgElement: any;

  constructor(el: ElementRef) {

    this.svgElement = el;

    console.log(el.nativeElement.setAttributeNS(null, 'style', 'fill:white'));

    el.nativeElement.setAttributeNS(null, 'opacity', '0.7');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.svgElement.nativeElement.setAttributeNS(null, 'style', 'fill:black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.svgElement.nativeElement.setAttributeNS(null, 'style', 'fill:white');
  }


  private highlight(color: string) {

  }
}
