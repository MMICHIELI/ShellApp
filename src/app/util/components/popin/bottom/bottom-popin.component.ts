/**
 * Created by mmichieli on 04/02/2018.
 */
import { Component, HostListener, Inject, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { LocalStorageService } from '../../../../util/services/storage/local-storage.service';
import { ThemeEventsService } from '../../../../util/services/events/theme/theme-event.service';
import { Theme } from '../../../../util/decorators/theme.decorator';
import { PopinService } from '../popin.service';
import { ToasterEventsService } from '../../../../util/services/events/toaster/toaster-events.service';

@Component({
  selector: 'sc-bottom-popin',
  styleUrls: [
    './bottom-popin.component.css',
    './../blackshield.component.css'
  ],
  templateUrl: './bottom-popin.component.html'
})
export class BottomPopinComponent implements OnInit {

  @Theme() public theme: string;
  public isPopinDeployed: boolean;
  public currentScroll: number = 0;

  constructor(private popinService: PopinService,
              private localStorage: LocalStorageService,
              private themeEventsService: ThemeEventsService,
              private toasterService: ToasterEventsService) {
  }

  public ngOnInit() {
    this.popinService.closeBottomPopinEmitter.subscribe(() => {
      this.isPopinDeployed = false;
    });
    this.popinService.openBottomPopinEmitter.subscribe(() => {
      this.isPopinDeployed = true;
    });
  }

  public closePopin() {
    this.toasterService.warnEvent('Warning, data not saved');
    this.popinService.closeBottomPopin();
  }
}
