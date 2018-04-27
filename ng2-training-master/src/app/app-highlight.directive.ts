import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  // tslint:disable-next-line:use-host-property-decorator
  host : {
    '(mouseover)' : 'onMouseOver()',
    '(mouseleave)' : 'onMouseOut()',
    '[style.backgroundColor]' : 'color'
  }
})
export class AppHighlightDirective {

  color: string;

  constructor() { }

  onMouseOver() {
    this.color = '#F7F7F7';
  }

  onMouseOut() {
    this.color = '';
  }
}
