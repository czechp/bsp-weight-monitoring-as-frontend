import {Component, Input} from '@angular/core';
import {ReportModel} from "../../model/report.model";
import {UserRole} from "../../../users/model/user-info.model";
import {
  HistoricalMeasurementsHttpService
} from "../../../historical-measurements/service/historical-measurements-http.service";
import {
  ProductionLineMeasurements
} from "../../../historical-measurements/component/historical-measurements-chart/historical-measurements-chart.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent {
  @Input() report!: ReportModel;
  protected readonly UserRole = UserRole;

  measurements$ = new BehaviorSubject<ProductionLineMeasurements | null>(null);
  constructor(private historicalHttp:HistoricalMeasurementsHttpService) {

  }

  ngOnInit() {
    this.historicalHttp.getHistoricalMeasurementsForReport(this.report.id).subscribe(measurements => {
      this.measurements$.next(measurements);
    });
  }
}
