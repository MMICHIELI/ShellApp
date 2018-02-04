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
  selector: 'sc-inline-icon-box',
  templateUrl: './inline-icon-box.component.html',
  styleUrls: [
    './inline-icon-box.component.css'
  ]
})

export class InlineIconBoxComponent implements OnInit {

  @Input('label') public label: string;
  @Input('value') public value: string;
  @Input('label-color') public labelColor?: string;
  @Input('value-color') public valueColor?: string;
  @Input('fontSize') public fontSize?: string;
  @Input('icon-color') public iconColor?: string;
  @Input('background-left') public backgroundLeft?: string;
  @Input('background-right') public backgroundRight?: string;
  @Input('material-icon') public materialIcon?: string;
  @Input('box-padding') public boxPadding?: string;
  @Input('box-margin-bottom') public boxMarginBottom?: string;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getValueColor() {
    return {
      color: this.valueColor || 'black'
    };
  }

  public getLabelColor() {
    return {
      color: this.labelColor || 'black'
    };
  }

  public getIconColor() {
    return {
      color: this.iconColor || 'black'
    };
  }

  public getBoxStyle() {
    return {
      'padding': this.boxPadding || '5px',
      'margin-bottom': this.boxMarginBottom || '20px',
      'font-size': this.fontSize || '10pt',
      'background': 'linear-gradient(60deg, ' + this.backgroundLeft + ', ' + this.backgroundRight + ')'
    };
  }
}
