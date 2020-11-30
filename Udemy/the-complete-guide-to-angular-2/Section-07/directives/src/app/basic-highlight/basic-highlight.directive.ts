import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = '#d7d7d7';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = '#d7d7d7';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }
}