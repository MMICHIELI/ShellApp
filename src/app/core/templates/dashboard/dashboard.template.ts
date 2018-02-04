import { Component, OnInit } from '@angular/core';
import { ToasterEventsService } from '../../../util/services/events/toaster/toaster-events.service';
import { Theme } from '../../../util/decorators/theme.decorator';

@Component({
  selector: 'sc-dashboard-template',
  styleUrls: ['./dashboard.template.css'],
  templateUrl: './dashboard.template.html'
})
export class DashboardTemplate implements OnInit {

  @Theme() public theme: string;

  constructor(private toastService: ToasterEventsService) {
  }

  public ngOnInit() {
    console.log('Dashboard template loaded!');
  }

}
