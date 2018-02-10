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
import { SessionStorageService } from './services/storage/session-storage.service';
import { SessionStorageEventsService } from './services/events/storage/session-storage-events.service';
import { RegexService } from './services/regex/regex.service';
// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { SharedModule } from 'primeng/components/common/shared';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ChipsModule } from 'primeng/components/chips/chips';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { DisplayNullPipe } from './pipes/display-null.pipe';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { SanitizeHtml } from './pipes/display-html.pipe';
import { NewActionsComponent } from './components/actions/new-actions.component';
import { RouterModule } from '@angular/router';
import { AccordionModule, DragDropModule, ListboxModule } from 'primeng/primeng';
import { SpacesNumberPipe } from './pipes/comma-separated-number-pipe';
import { CountoModule } from 'angular2-counto';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
} from '@angular/material';
import { TrimStringPipe } from './pipes/trim-string.pipe';
import { MyNumberFormatterDirective } from './directives/my-number-formatter-directive';
import { MyNumberPipe } from './pipes/my-number-pipe';

import { CapitalizefirstPipe } from './pipes/capitalizefirst.pipe';
import { SimpleAutocompleteFragment } from './components/simple-auto-complete/simple-auto-complete.fragment';
import { AutoCompleteFragment } from './components/auto-complete/auto-complete.fragment';
import { FileUploadModule } from 'ng2-file-upload';
import { LocalDatePipe } from './pipes/local-date-pipe';
import { FormatNumberInput } from './pipes/format-number-input';
import { CUSTOM_DATE_FORMATS } from './date/date-format-constants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // @angular/forms
    FormsModule,
    ReactiveFormsModule,
    // @angular/router
    RouterModule,
    // @ngx-translate
    TranslateModule,
    // @angular/common
    CommonModule,
    // Primeng Modules
    TooltipModule,
    ChipsModule,
    DataTableModule,
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
    AccordionModule,
    ListboxModule,
    // @angular/Material
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatChipsModule,
    // ng2-fileUpload
    FileUploadModule,
    // Counto
    CountoModule
  ],
  declarations: [
    DisplayNullPipe,
    SpacesNumberPipe,
    MatchHeightDirective,
    SanitizeHtml,
    TrimStringPipe,
    NewActionsComponent,
    MyNumberFormatterDirective,
    MyNumberPipe,
    AutoCompleteFragment,
    CapitalizefirstPipe,
    SimpleAutocompleteFragment,
    LocalDatePipe,
    FormatNumberInput,
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
    DecimalPipe,
    {
      provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS
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
    HttpClientModule,
    NewActionsComponent,
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
    MyNumberFormatterDirective,
    MyNumberPipe,
    AutoCompleteFragment,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatChipsModule,
    CapitalizefirstPipe,
    MatChipsModule,
    SimpleAutocompleteFragment,
    AccordionModule,
    ListboxModule,
    FileUploadModule,
    CountoModule,
    FormatNumberInput
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
