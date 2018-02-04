/**
 * Created by mmichieli on 04/02/2018.
 */
import { Component, SimpleChanges, Input, OnInit, OnChanges, ElementRef, ViewChild, ChangeDetectorRef, HostListener, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'sc-context-banner',
  templateUrl: './context-banner.component.html',
  styleUrls: [
    './context-banner.component.css'
  ]
})

export class ContextBannerComponent implements OnInit, AfterViewInit {

  @ViewChild('banner') public banner: ElementRef;
  public isDeployed = false;
  public left: number = 0;
  public opacity: number = 0;
  public isHide: boolean = false;
  public currentScroll: number = 0;
  private iconBox: number = 26;

  constructor(public cd: ChangeDetectorRef, @Inject(DOCUMENT) private document: any) {}

  public ngOnInit(): void {
    this.opacity = 0;
  }

  public toggleDeployed() {
    this.isDeployed = !this.isDeployed;
    this.isDeployed ? this.left = 0 : this.left = this.iconBox - this.banner.nativeElement.offsetWidth;
  }

  public ngAfterViewInit() {
    this.left = this.iconBox - this.banner.nativeElement.offsetWidth;
    this.opacity = 1;
    this.cd.detectChanges();
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    let numberVar = this.document.documentElement.scrollTop;
    if (numberVar > this.currentScroll) {
      this.isHide = true;
    }
    if (numberVar < this.currentScroll) {
      this.isHide = false;
    }
    this.currentScroll = numberVar;
  }
}
