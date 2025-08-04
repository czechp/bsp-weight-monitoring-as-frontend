import { Component } from '@angular/core';
import {DashboardDeleteStateService} from "../../service/dashboard-delete-state.service";

@Component({
  selector: 'app-dashboard-delete-page',
  templateUrl: './dashboard-delete-page.component.html',
  styleUrls: ['./dashboard-delete-page.component.scss'],
  providers: [DashboardDeleteStateService]
})
export class DashboardDeletePageComponent {
  constructor(private stateService: DashboardDeleteStateService) {
  }

  removeDashboard() {
    this.stateService.removeDashboard();
  }
}
