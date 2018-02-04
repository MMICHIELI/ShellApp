import { Component, HostListener, Inject, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HeaderEventsService } from '../../../util/services/events/header/header-events.service';
import { LocalStorageService } from '../../../util/services/storage/local-storage.service';
import { ThemeEventsService } from '../../../util/services/events/theme/theme-event.service';
import { MenuEventsService } from '../../../util/services/events/sub-header-tab/sub-header-tab-events.service';

@Component({
  selector: 'mmi-menu',
  styleUrls: [
    './menu.component.css',
    './menu.terapy-theme.css',
    './menu.cherry-theme.css',
    './menu.zero-theme.css',
    './menu.wave-theme.css',
    './menu.sand-theme.css'
  ],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input('isMenuDeployed') public isMenuDeployed: boolean;

  @Output() public toggleMenu: EventEmitter<any> = new EventEmitter<any>();
  @Input('theme') public theme: string;

  public currentScroll: number = 0;

  constructor(private headerEventsService: HeaderEventsService,
              private localStorage: LocalStorageService,
              private themeEventsService: ThemeEventsService,
              @Inject(DOCUMENT) private document: any) {
  }

  public ngOnInit() {
    this.headerEventsService.toggleMenu.subscribe(
      () => this.isMenuDeployed = !this.isMenuDeployed
    );

    this.themeEventsService.switchThemeEmitter.subscribe(
      () => this.theme = this.localStorage.get('theme')
    );

  }

  public switch() {
    this.theme = this.localStorage.get('theme');
  }

  public mouseleave() {
    this.isMenuDeployed = false;
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    let numberVar = this.document.documentElement.scrollTop;
    if (numberVar !== this.currentScroll) {
      this.toggleMenu.emit();
    }
  }
}
