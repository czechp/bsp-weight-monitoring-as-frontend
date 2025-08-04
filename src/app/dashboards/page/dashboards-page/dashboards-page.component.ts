import {Component} from '@angular/core';
import {DashboardsStateService} from "../../service/dashboards-state.service";
import {DashboardModel} from "../../model/dashboard.model";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-dashboards-page',
  templateUrl: './dashboards-page.component.html',
  styleUrls: ['./dashboards-page.component.scss'],
  providers: [DashboardsStateService]
})
export class DashboardsPageComponent {
  dashboards$ = this.dashboardsStateService.dashboards$;

  constructor(private dashboardsStateService: DashboardsStateService) {
  }

  navigateToDetails(dashboard: DashboardModel) {
    this.dashboardsStateService.navigateToDetails(dashboard.id);
  }

  navigateToCreate() {
    this.dashboardsStateService.navigateToCreate();
  }

  protected readonly UserRole = UserRole;
}
