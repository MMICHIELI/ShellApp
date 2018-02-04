/**
 * Created by mmichieli on 04/02/2018.
 */
import { AfterViewChecked, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[matchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {
  // class name to match height
  @Input() public matchHeight: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:resize')
  public onResize() {
    this.matchAllHeight(this.el.nativeElement, this.matchHeight);
  }

  public ngAfterViewChecked() {
    this.matchAllHeight(this.el.nativeElement, this.matchHeight);
  }

  public matchAllHeight(parent: HTMLElement, className: string) {

    // if parent HTML Element is not set
    if (!parent) {
      return;
    }

    // step 1: find all the child elements with the selected class name
    const children = parent.getElementsByClassName(className);

    // if HTML Element has no children
    if (!children) {
      return;
    }

    // step 1: reset all children height
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    // step 2: get all the child elements heights
    const itemHeights = Array.from(children)
      .map((x) => x.getBoundingClientRect().height);

    // step 3: find out the tallest
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    // step 4: update all the child elements to the tallest height
    Array.from(children)
      .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
  }
}
