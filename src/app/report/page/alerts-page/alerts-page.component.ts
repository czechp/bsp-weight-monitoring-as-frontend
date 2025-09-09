import {Component} from '@angular/core';
import {AlertsStateService} from "../../service/alerts-state.service";

@Component({
  selector: 'app-alerts-page',
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.scss'],
  providers: [AlertsStateService]
})
export class AlertsPageComponent {
  alertsFilterForm = this.stateService.alertsFilterForm;
  alerts$ = this.stateService.alerts$;
  productionLines$ = this.stateService.productionLines$;

  constructor(private stateService: AlertsStateService) {
  }

  filterAlerts() {
    this.stateService.getAlerts();
  }
}
