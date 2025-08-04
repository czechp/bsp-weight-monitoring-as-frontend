import {Component} from '@angular/core';
import {DashboardDetailsStateService} from "../../service/dashboard-details-state.service";

@Component({
  selector: 'app-dashboard-details-page',
  templateUrl: './dashboard-details-page.component.html',
  styleUrls: ['./dashboard-details-page.component.scss'],
  providers: [DashboardDetailsStateService]
})
export class DashboardDetailsPageComponent {
  navigateToEdit() {
    this.stateService.navigateToEdit();
  }

  constructor(public stateService: DashboardDetailsStateService) {
  }
}
