import {Injectable} from '@angular/core';
import {HistoricalMeasurementsHttpService} from "./historical-measurements-http.service";
import {DateFilterFormRange, DateFormHandler} from "../../shared/model/date-filter.form";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";

export type Measurements = {
  value: number;
  referenceValue: number;
  minValue: number;
  maxValue: number;
  createdAt: string;
}


@Injectable()
export class HistoricalMeasurementsStateService {
  filterForm = new DateFormHandler().getFilterForm(DateFilterFormRange.WEEK);
  lineName = this.activatedRoute.snapshot.paramMap.get('lineName') as string;
  dosingDeviceId = Number(this.activatedRoute.snapshot.paramMap.get('dosingNr'));
  measurements: Measurements[] = [];
  measurements$ = new BehaviorSubject<Measurements[]>([]);

  constructor(private httpService: HistoricalMeasurementsHttpService, private activatedRoute: ActivatedRoute) {
    this.getMeasurements();
  }

  private getMeasurements() {
    const {from, to} = this.filterForm.value as { from: string, to: string };
    this.httpService.getHistoricalMeasurements(this.lineName, from, to).subscribe(data => {
      this.measurements = data.map(m => ({
        value: m.measurements[this.dosingDeviceId - 1].value,
        referenceValue: m.product.productCorrectWeight,
        minValue: m.product.productMinimumWeight,
        maxValue: m.product.productMaximumWeight,
        createdAt: m.createdAt
      }));
      this.measurements$.next(this.measurements);
    });
  }
}
