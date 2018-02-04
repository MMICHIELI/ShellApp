/**
 * Created by mmichieli on 04/02/2018.
 */
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { MyNumberPipe } from '../pipes/my-number-pipe';

@Directive({selector: '[myNumberFormatter]'})
export class MyNumberFormatterDirective implements OnInit {

  @Input() public decimalNumber: number;
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef,
              private currencyPipe: MyNumberPipe) {
    this.el = this.elementRef.nativeElement;
  }

  public ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value, this.decimalNumber);
  }

  @HostListener('focus', ['$event.target.value'])
  public onFocus(value) {
    this.el.value = this.currencyPipe.parse(value, this.decimalNumber); // opossite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  public onBlur(value) {
    this.el.value = this.currencyPipe.transform(value, this.decimalNumber);
  }

}
