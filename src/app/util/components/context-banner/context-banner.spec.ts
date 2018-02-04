import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextBannerComponent } from './context-banner.component';

describe('ContextBannerComponent ', () => {
  let comp: ContextBannerComponent;
  let fixture: ComponentFixture<ContextBannerComponent>;
  let theme: string = 'therapy';

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), BrowserAnimationsModule],
      declarations: [ContextBannerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextBannerComponent);
    comp = fixture.componentInstance;
  });

  it('should pass in the ngOnInit method', () => {
    let spyNgOnInit = spyOn(comp, 'ngOnInit');
    comp.ngOnInit();
    expect(spyNgOnInit).toHaveBeenCalled();
  });

  it('should pass in the ngAfterViewInit method', () => {
    let spyNgAfterViewInit = spyOn(comp, 'ngAfterViewInit');
    comp.ngAfterViewInit();
    expect(spyNgAfterViewInit).toHaveBeenCalled();
  });

  it('should set the opacity after it pass to the ngAfterViewInit method', () => {
    expect(comp.opacity).toBe(0);
    comp.ngAfterViewInit();
    expect(comp.opacity).toBe(1);
  });

  it('should retract or extend the context banner in relation to it isDeployed boolean value', () => {
    comp.isDeployed = true;
    comp.toggleDeployed();
    expect(comp.isDeployed).toBeFalsy();
    expect(comp.left).not.toBe(0);
    comp.toggleDeployed();
    expect(comp.isDeployed).toBeTruthy();
    expect(comp.left).toBe(0);
  });

});
