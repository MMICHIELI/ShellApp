import { FeaturesREConsultComponent } from './core/consult/features-re/features-re-consult.component';
import { FeaturesHEConsultComponent } from './core/consult/features-he/features-he-consult.component';
import { FeaturesSBConsultComponent } from './core/consult/features-sb/features-sb-consult.component';
// Application wide providers
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ToasterEventsService } from './util/services/events/toaster/toaster-events.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormActionsEventsService } from './util/services/events/form-action/form-actions-events.service';
import { Http } from '@angular/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LocationBarComponent } from './core/components/header/location-bar/location-bar.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { FeatureRepository } from './commercial/api/feature-repository/feature.repository';
import { DashboardTemplate } from './core/templates/dashboard/dashboard.template';
import { ErrorsComponent } from './error/errors.component';
import { ActuLeftComponent } from './core/consult/actu-left.component';
import { BrowserModule } from '@angular/platform-browser';
import { UtilModule } from './util/util.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ENV_PROVIDERS } from './environment';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { LocalStorageEventsService } from './util/services/events/storage/local-storage-events.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRepository } from './video/api/product.repository';
import { PurchaseOrderRepository } from './video/api/purchase-order.repository';

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  FeatureRepository,
  ToasterService,
  ToasterEventsService,
  FormActionsEventsService,
  LocalStorageEventsService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

export function httpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/trad/', '.json');
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationBarComponent,
    MenuComponent,
    DashboardTemplate
  ],
  imports: [ // import Angular's modules
    ToasterModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpLoaderFactory),
        deps: [Http]
      }
    }),
    UtilModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    ProductRepository,
    PurchaseOrderRepository
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues  = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
