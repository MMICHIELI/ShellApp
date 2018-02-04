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
  selector: 'mmi-block',
  templateUrl: './block.component.html',
  styleUrls: [
    './block.component.css',
    './cherry.block.css',
    './terapy.block.css',
    './wave.block.css'
  ]
})

export class BlockComponent implements OnInit {

  @Theme() public theme: string;
  @Input() public title: string;

  constructor() {}
  public ngOnInit(): void {}

}
