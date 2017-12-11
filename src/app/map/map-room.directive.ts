import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[mapRoom]'
})
export class MapRoomDirective {
  @Output() OnHovered = new EventEmitter<String>();
  @Output() OnClicked = new EventEmitter<String>();

  svgElement: any;


  constructor(el: ElementRef) {

    this.svgElement = el;

    this.svgElement.nativeElement.classList.add("back");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.OnHovered.emit(this.svgElement.nativeElement.id);
    this.svgElement.nativeElement.classList.add("highlight");
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.svgElement.nativeElement.classList.remove("highlight");
  }

  @HostListener('click') onMouseClick() {
    this.OnClicked.emit(this.svgElement.nativeElement.id);
  }
}
