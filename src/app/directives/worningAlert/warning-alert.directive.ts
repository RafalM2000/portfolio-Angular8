import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';



@Directive ({
  selector: '[appWarningAlert]'
})
export class WarningAlertDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'gray';
    element.nativeElement.style.padding = '10px';
    element.nativeElement.style.fontWeight = '900';
    element.nativeElement.style.fontSize = '16px';
    element.nativeElement.style.borderRadius = '7px';
  }
}
