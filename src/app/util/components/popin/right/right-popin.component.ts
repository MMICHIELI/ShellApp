/**
 * Created by mmichieli on 04/02/2018.
 */
import { Component, OnInit } from '@angular/core';
import { PopinService } from '../popin.service';
@Component({
  selector: 'sc-right-popin',
  styleUrls: [
    './right-popin.component.css',
    './../blackshield.component.css'
  ],
  templateUrl: './right-popin.component.html'
})
export class RightPopinComponent implements OnInit {

  public isPopinDeployed: boolean;

  constructor(private popinService: PopinService) {
  }

  public ngOnInit() {
    this.popinService.closeRightPopinEmitter.subscribe(() => {
      this.isPopinDeployed = false;
      console.log('close', this.isPopinDeployed);
    });
    this.popinService.openRightPopinEmitter.subscribe(() => {
      console.log('open');
      this.isPopinDeployed = true;
    });
  }
}
