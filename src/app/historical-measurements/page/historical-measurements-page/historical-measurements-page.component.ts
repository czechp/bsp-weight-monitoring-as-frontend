import {Component} from '@angular/core';
import {HistoricalMeasurementsStateService} from "../../service/historical-measurements-state.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-historical-measurements-page',
  templateUrl: './historical-measurements-page.component.html',
  styleUrls: ['./historical-measurements-page.component.scss'],
  providers: [HistoricalMeasurementsStateService]
})
export class HistoricalMeasurementsPageComponent {
  lineName = this.service.lineName;
  dosingDeviceId = this.service.dosingDeviceId;
  filterForm = this.service.filterForm;
  measurements$ = this.service.measurements$;

  constructor(private service: HistoricalMeasurementsStateService, ) {
  }

}
