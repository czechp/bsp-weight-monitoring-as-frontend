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
import {MeasurementsSampleHttpService} from "../../../measurements-sample/service/measurements-sample-http.service";
import {
  MeasurementsSampleModel
} from "../../../measurements-sample/component/measurements-sample-chart/measurements-sample-chart.component";
import {
  ProductionLineStatusModel
} from "../../../production-line-status/component/production-line-status-chart/production-line-status-chart.component";
import {
  ProductionLineStatusHttpService
} from "../../../production-line-status/service/production-line-status-http.service";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent {
  @Input() report!: ReportModel;
  measurements$ = new BehaviorSubject<ProductionLineMeasurements | null>(null);
  measurementsSamples$ = new BehaviorSubject<MeasurementsSampleModel[] | null>(null);
  productionLineStatuses$ = new BehaviorSubject<ProductionLineStatusModel [] | null>(null);
  protected readonly UserRole = UserRole;

  constructor(private historicalHttp: HistoricalMeasurementsHttpService, private measurementsSampleHttp: MeasurementsSampleHttpService, private productionLineStatusesHttp: ProductionLineStatusHttpService) {

  }

  ngOnInit() {
    this.historicalHttp.getHistoricalMeasurementsForReport(this.report.id).subscribe(measurements => {
      this.measurements$.next(measurements);
    });

    this.measurementsSampleHttp.getSamplesForReport(this.report.id).subscribe(samples => {
      this.measurementsSamples$.next(samples);
    });

    this.productionLineStatusesHttp.getStatusesForReport(this.report.id).subscribe(statuses => {
      this.productionLineStatuses$.next(statuses);
    });
  }
}
