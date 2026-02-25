import {Component} from '@angular/core';
import HistoricalMeasurementsStateService from "../../service/historical-measurements-state.service";

@Component({
  selector: 'app-historical-measurements-page',
  templateUrl: './historical-measurements-page.component.html',
  styleUrls: ['./historical-measurements-page.component.scss'],
  providers: [HistoricalMeasurementsStateService]
})
export class HistoricalMeasurementsPageComponent {
  lineName = this.service.lineName;
  filterForm = this.service.filterForm;
  measurements$ = this.service.measurements$;
  selectedDosingDeviceId = this.service.selectedDosingDeviceId;

  constructor(private service: HistoricalMeasurementsStateService, ) {
  }

  filterByDay() {
    this.service.filterByDay();
  }
}
