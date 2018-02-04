/**
 * Created by mmichieli on 04/02/2018.
 */
// Angular 2
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// Decorators
import { Theme } from '../../decorators/theme.decorator';

// Component configuration
@Component({
  selector: 'sc-currency-number-multibox',
  templateUrl: './currency-number-multibox.component.html',
  styleUrls: [
    './currency-number-multibox.component.css'
  ]
})

export class CurrencyNumberMultiBoxComponent implements OnInit {

  @Input('label') public label: string;
  @Input('number') public number: number;
  @Input('currency') public currency: any;
  @Input('color-left') public colorLeft: string;
  @Input('color-right') public colorRight: string;
  @Input('currencyCode') public currencyCode: string;

  constructor() {
  }

  public ngOnInit(): void {

  }

  public getStyle() {
    return {
      background: 'linear-gradient(60deg, #' + this.colorLeft + ', #' + this.colorRight + ')'
    };
  }
}
