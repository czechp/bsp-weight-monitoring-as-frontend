import {Component, Input} from '@angular/core';
import {
  DateFilterRange
} from "../historical-measurements-date-selector/historical-measurements-date-selector.component";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ProductionLineMeasurements} from "../historical-measurements-chart/historical-measurements-chart.component";
import {BACKEND_URL} from "../../../shared/configuration/URL";
import {
  MeasurementsSampleModel
} from "../../../measurements-sample/component/measurements-sample-chart/measurements-sample-chart.component";
import {MeasurementsSampleHttpService} from "../../../measurements-sample/service/measurements-sample-http.service";

@Component({
  selector: 'app-historical-measurements-wrapper',
  templateUrl: './historical-measurements-wrapper.component.html',
  styleUrls: ['./historical-measurements-wrapper.component.scss']
})
export class HistoricalMeasurementsWrapperComponent {
  @Input({required: true})
  productionLineId!: number;

  measurements$ = new BehaviorSubject<ProductionLineMeasurements | null>(null);
  measurementsSample$ = new BehaviorSubject<MeasurementsSampleModel[] | null>(null);

  constructor(private http: HttpClient, private sampleHttp: MeasurementsSampleHttpService) {
  }

  protected getMeasurements(dateRange: DateFilterRange) {
    this.http.get<ProductionLineMeasurements>(`${BACKEND_URL}/historical-measurements`, {
      params: {
        productionLineId: this.productionLineId,
        from: dateRange.from,
        to: dateRange.to
      }
    })
      .subscribe((data) => {
        this.measurements$.next(data);
      });

    this.sampleHttp.getMeasurementsSample(this.productionLineId, dateRange.from, dateRange.to)
      .subscribe((data) => {
        this.measurementsSample$.next(data);
      });
  }
}
