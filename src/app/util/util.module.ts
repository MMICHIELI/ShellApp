import { ArrayService } from './services/array/array.service';
import { MatchHeightDirective } from './directives/match-height.directive';
// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
// Services
import { HeaderEventsService } from './services/events/header/header-events.service';
import { LocalStorageService } from './services/storage/local-storage.service';
import { ThemeEventsService } from './services/events/theme/theme-event.service';
import { LangEventsService } from './services/events/lang/lang-event.service';
// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { SharedModule } from 'primeng/components/common/shared';
import { SessionStorageService } from './services/storage/session-storage.service';
import { SessionStorageEventsService } from './services/events/storage/session-storage-events.service';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { GlobalSearchComponent } from '../core/components/global-search/global-search.component';
import { ChipsModule } from 'primeng/components/chips/chips';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { RegexService } from './services/regex/regex.service';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { DisplayNullPipe } from './pipes/display-null.pipe';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { SanitizeHtml } from './pipes/display-html.pipe';
import { NewActionsComponent } from './components/actions/new/new-actions.component';
import { BlockComponent } from './components/block/block.component';
import { CurrencyNumberBoxComponent } from './components/number-box/currency-number-box.component';
import { CurrencyNumberMultiBoxComponent } from './components/number-multibox/currency-number-multibox.component';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import { InlineIconBoxComponent } from './components/inline-icon-box/inline-icon-box.component';
import { RouterModule } from '@angular/router';
import { AccordionModule, DragDropModule, ListboxModule } from 'primeng/primeng';
import { SpacesNumberPipe } from './pipes/comma-separated-number-pipe';
import { TableFormFragment } from './components/table-form/table-form.fragment';
import { ContextBannerComponent } from './components/context-banner/context-banner.component';
import { TableConsultFragment } from './components/table-consult/table-consult.fragment';
import { CountoModule } from 'angular2-counto';

import {
  DateAdapter,
  MD_DATE_FORMATS,
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdGridListModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdTabsModule
} from '@angular/material';
import { TrimStringPipe } from './pipes/trim-string.pipe';
import { MyNumberFormatterDirective } from './directives/my-number-formatter-directive';
import { MyNumberPipe } from './pipes/my-number-pipe';

import { CostCenterEventsService } from './services/events/cost-center/cost-center.service';
import { SupplierMiloRepository } from '../milo/api/supplier-milo.repository';
import { ThirdPartyRepository } from '../referentiel/api/third-party.repository';
import { CustomDatePicker } from './components/date-picker/date-picker';
import { RightPopinComponent } from './components/popin/right/right-popin.component';
import { BottomPopinComponent } from './components/popin/bottom/bottom-popin.component';
import { PopinService } from './components/popin/popin.service';
import { CapitalizefirstPipe } from './pipes/capitalizefirst.pipe';
import { SimpleAutocompleteFragment } from './components/simple-auto-complete/simple-auto-complete.fragment';
import { AutoCompleteFragment } from './components/auto-complete/auto-complete.fragment';
import { FileUploadComponent } from './components/upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SubHeaderTabVideoService } from '../video/modules/sub-header-tab/sub-header-tab-video.service';
import { GlobalErrorHandler } from './services/global.error.handler';
import { MyDialogPopupComponent } from './components/popup/popup/popup.component';
import { LocalDatePipe } from './pipes/local-date-pipe';
import { FormatNumberInput } from './pipes/format-number-input';
import { CustomDateAdapter } from './date/date-adapter';
import { CUSTOM_DATE_FORMATS } from './date/date-format-constants';

@NgModule({
  imports: [
    TooltipModule,
    ChipsModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule,
    CommonModule,
    AutoCompleteModule,
    SelectButtonModule,
    CalendarModule,
    MultiSelectModule,
    CheckboxModule,
    SharedModule,
    DialogModule,
    ConfirmDialogModule,
    InputMaskModule,
    DragDropModule,
    MdListModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdProgressBarModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdChipsModule,
    AccordionModule,
    ListboxModule,
    FileUploadModule,
    CountoModule
  ],
  declarations: [
    GlobalSearchComponent,
    DisplayNullPipe,
    SpacesNumberPipe,
    MatchHeightDirective,
    SanitizeHtml,
    TrimStringPipe,
    NewActionsComponent,
    BlockComponent,
    CurrencyNumberBoxComponent,
    TableFormFragment,
    TableConsultFragment,
    MyNumberFormatterDirective,
    MyNumberPipe,
    AutoCompleteFragment,
    RightPopinComponent,
    BottomPopinComponent,
    CapitalizefirstPipe,
    SimpleAutocompleteFragment,
    FileUploadComponent,
    IconBoxComponent,
    InlineIconBoxComponent,
    LocalDatePipe,
    FormatNumberInput,
    ContextBannerComponent,
    CurrencyNumberMultiBoxComponent
  ],
  providers: [
    LangEventsService,
    HeaderEventsService,
    LocalStorageService,
    ThemeEventsService,
    SessionStorageService,
    SessionStorageEventsService,
    RegexService,
    ArrayService,
    MyNumberPipe,
    DatePipe,
    PopinService,
    DecimalPipe,
    {
      provide: MD_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS
    },
    {
      provide: DateAdapter, useClass: CustomDateAdapter
    }
  ],
  exports: [
    CommonModule,
    ChipsModule,
    TranslateModule,
    TooltipModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    GlobalSearchComponent,
    NewActionsComponent,
    BlockComponent,
    AutoCompleteModule,
    SelectButtonModule,
    CalendarModule,
    MultiSelectModule,
    SharedModule,
    DialogModule,
    CheckboxModule,
    ConfirmDialogModule,
    DisplayNullPipe,
    TrimStringPipe,
    SpacesNumberPipe,
    MatchHeightDirective,
    SanitizeHtml,
    InputMaskModule,
    DragDropModule,
    TableFormFragment,
    TableConsultFragment,
    MyNumberFormatterDirective,
    MyNumberPipe,

    AutoCompleteFragment,
    MdButtonModule,
    MdRadioModule,
    MdGridListModule,
    MdCardModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdChipsModule,
    RightPopinComponent,
    BottomPopinComponent,
    CapitalizefirstPipe,
    MdChipsModule,
    SimpleAutocompleteFragment,
    AccordionModule,
    ListboxModule,
    FileUploadComponent,
    FileUploadModule,
    CountoModule,
    CurrencyNumberBoxComponent,
    IconBoxComponent,
    InlineIconBoxComponent,
    LocalDatePipe,
    FormatNumberInput,
    ContextBannerComponent,
    CurrencyNumberMultiBoxComponent
  ],
  entryComponents: [
  ]
})

export class UtilModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilModule
    };
  }
}
