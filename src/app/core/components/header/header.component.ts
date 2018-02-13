import { Component, EventEmitter, HostListener, Inject, Input, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LocalStorageEventsService } from '../../../util/services/events/storage/local-storage-events.service';
import { LocalStorageService } from '../../../util/services/storage/local-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { SessionStorageService } from '../../../util/services/storage/session-storage.service';
import { ToasterEventsService } from '../../../util/services/events/toaster/toaster-events.service';

@Component({
  selector: 'mmi-header',
  styleUrls: [
    './header.component.css',
    './header.terapy-theme.css',
    './header.cherry-theme.css',
    './header.zero-theme.css',
    './header.wave-theme.css',
    './header.sand-theme.css'
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input('theme') public theme: string;
  public lang: string;
  public isHide: boolean = false;
  public currentScroll: number = 0;
  @Output() public toggleMenu: EventEmitter<any> = new EventEmitter<any>();
  public searchType;
  public inputText: string = '';
  public env: string = process.env.ENV;

  constructor(private router: Router,
              private localStorageEvents: LocalStorageEventsService,
              private localStorage: LocalStorageService,
              private toasterService: ToasterEventsService,
              private translate: TranslateService,
              @Inject(DOCUMENT) private document: any,
              private sessionStorageService: SessionStorageService) {
  }

  public ngOnInit() {
    // this.inputText = '';
    this.lang = this.localStorage.get('lang') || 'fr';

    this.localStorageEvents.localStorageEvent.subscribe(() => {
      this.lang = this.localStorage.get('lang');
      this.theme = this.localStorage.get('theme');
    });
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    const numberVar = document.documentElement.scrollTop;
    if (numberVar > this.currentScroll) {
      this.isHide = true;
    }
    if (numberVar < this.currentScroll) {
      this.isHide = false;
    }
    this.currentScroll = numberVar;
  }

  public emitToggleMenuEvent() {
    this.toggleMenu.emit();
  }

  public search() {

    switch (this.searchType) {
      case '1' :
        break;
      case '2' :
        break;
      case '3' :
        break;
      case '4' :
        // this.productRepo.productGlobalSearch(this.inputText, 'fr').subscribe((products) => {
        //   if (isNullOrUndefined(products) || products.length === 0) {
        //     this.toasterService.warnEvent(this.translate.instant('GLOBAL_SEARCH.TOAST.NO_RESULT_PRODUCT'));
        //   }
        //   if (products.length === 1) {
        //     this.sessionStorageService.post('productId', products[0].id);
        //     this.router.navigateByUrl('/video/product/consult/' + products[0].id);
        //   } else {
        //     this.sessionStorageService.post('productGlobalSearchResutls', products);
        //     this.router.navigateByUrl('/video/globalProductSearch');
        //   }
        // });
        break;
      case '5' :
        // this.purchaseOrderRepo.getByGlobalSearch(this.inputText, 'fr').subscribe((purchaseOrders) => {
        //   if (isNullOrUndefined(purchaseOrders) || purchaseOrders.length === 0) {
        //     this.toasterService.warnEvent(this.translate.instant('GLOBAL_SEARCH.TOAST.NO_RESULT_PURCHASE_ORDER'));
        //   }
        //   if (purchaseOrders.length === 1) {
        //     this.router.navigateByUrl('/video/purchase-order/consult/' + purchaseOrders[0].id);
        //   } else {
        //     this.sessionStorageService.post('purchaseOrderGlobalSearchResults', purchaseOrders);
        //     this.router.navigateByUrl('/video/globalPurchaseOrderSearch');
        //   }
        // });
        break;
      default:
        break;
    }
  }

}
