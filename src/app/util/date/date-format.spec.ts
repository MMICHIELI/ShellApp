/**
 * Created by mmichieli on 04/02/2018.
 */
import { CustomDateAdapter } from "./date-adapter";
import {
  TestBed, inject
} from '@angular/core/testing';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { UtilModule } from "../util.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VideoMockRepository } from "../../../assets/mock-data/mock-video-repository";

describe('Format service', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilModule.forRoot(), TranslateModule.forRoot(), BrowserAnimationsModule],
      providers: [
        CustomDateAdapter,
        {
          provide: TranslateService,
          useClass: VideoMockRepository
        },
      ]
    });
  });

  it('Should format date in english format when the current language is english', inject([TranslateService], (translateService) => {
      let formatService : CustomDateAdapter = new CustomDateAdapter(translateService);
      let date = new Date(1993, 8, 24);

      translateService.currentLang = 'en';
      let formattedDate = formatService.format(date, 'input');
      expect(formattedDate).toBe('1993/09/24');
  }));

  it('Should format date in french format when the current language is french', inject([TranslateService], (translateService) => {
      let formatService : CustomDateAdapter = new CustomDateAdapter(translateService);
      let date = new Date(1993, 8, 24);

      translateService.currentLang = 'fr';
      let formattedDate = formatService.format(date, 'input');
      expect(formattedDate).toBe('24/09/1993');
  }));

  it('Should format date in german format when the current language is german', inject([TranslateService], (translateService) => {
      let formatService : CustomDateAdapter = new CustomDateAdapter(translateService);
      let date = new Date(1993, 8, 24);

      translateService.currentLang = 'de';
      let formattedDate = formatService.format(date, 'input');
      expect(formattedDate).toBe('24.09.1993');
  }));
});
