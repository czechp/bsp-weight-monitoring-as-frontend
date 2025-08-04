import { Component } from '@angular/core';
import {DashboardCreateStateService} from "../../service/dashboard-create-state.service";

@Component({
  selector: 'app-dashboard-create-page',
  templateUrl: './dashboard-create-page.component.html',
  styleUrls: ['./dashboard-create-page.component.scss'],
  providers: [DashboardCreateStateService]
})
export class DashboardCreatePageComponent {
  createDashboardForm$ = this.stateService.createDashboardForm$;
  icons$ = this.stateService.icons;

  constructor(private stateService: DashboardCreateStateService) {
  }

  createDashboard() {
    this.stateService.createDashboard();
  }
}
