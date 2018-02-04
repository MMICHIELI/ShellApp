// Angular 2
import { Component, Input, OnInit } from '@angular/core';

// Component configuration
@Component({
  selector: 'mmi-global-search',
  templateUrl: 'global-search.component.html',
  styleUrls: ['global-search.component.css']
})

export class GlobalSearchComponent implements OnInit {

  @Input('theme') public theme: string;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
