// Angular
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './util/services/storage/local-storage.service';
import { SessionStorageService } from './util/services/storage/session-storage.service';
import { HeaderEventsService } from './util/services/events/header/header-events.service';
import { TranslateService } from '@ngx-translate/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { ToasterEventsService } from './util/services/events/toaster/toaster-events.service';
import { Theme } from './util/decorators/theme.decorator';
import { MenuEventsService } from './util/services/events/sub-header-tab/sub-header-tab-events.service';
import { routerTransition } from './util/animations/routerTransition';
import { FeatureRepository } from './commercial/api/feature-repository/feature.repository';
import { FeatureModel } from './models/feature.model';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'shell-app',
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  @Theme() public theme: string;
  public isMenuDeployed: boolean = false;
  public toasterconfig: ToasterConfig = new ToasterConfig({ animation: 'flyRight' });
  constructor(private headerService: HeaderEventsService,
              private localStorage: LocalStorageService,
              private sessionStorage: SessionStorageService,
              private translate: TranslateService,
              private toasterService: ToasterService,
              private toasterEventsService: ToasterEventsService) {

    translate.addLangs(['en', 'fr', 'de']);
    translate.setDefaultLang('en');
    translate.use(this.localStorage.get('lang') || translate.getBrowserLang());

    if (window.innerWidth < 991) {
      this.isMenuDeployed = false;
    }
  }

  public ngOnInit() {

    // Subscription to error app toast's events
    this.toasterEventsService.toasterInfoEvent.subscribe((message) => {
      this.toasterService.pop('info', 'info', message);
    });

    // Subscription to success app toast's events
    this.toasterEventsService.toasterSuccessEvent.subscribe((message) => {
      this.toasterService.pop('success', 'success', message);
    });

    // Subscription to warning app toast's events
    this.toasterEventsService.toasterWarnEvent.subscribe((message) => {
      this.toasterService.pop('warning', 'warning', message);
    });

    // Subscription to error app toast's events
    this.toasterEventsService.toasterErrorEvent.subscribe((message) => {
      this.toasterService.pop('error', 'error', message);
    });
  }

  public toggleMenu() {
    this.isMenuDeployed = !this.isMenuDeployed;
  }

  public retractMenu() {
    this.isMenuDeployed = false;
  }

}
