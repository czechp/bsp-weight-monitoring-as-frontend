import {Injectable} from '@angular/core';
import {HistoricalMeasurementsHttpService} from "./historical-measurements-http.service";
import {DateFormHandler, SingleDateFilterForm} from "../../shared/model/date-filter.form";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";

export type Measurements = {
  value: number;
  referenceValue: number;
  minValue: number;
  maxValue: number;
  createdAt: string;
}


@Injectable()
export class HistoricalMeasurementsStateService {
  filterForm: FormGroup<SingleDateFilterForm> = new DateFormHandler().getSingleFilterForm();
  lineName = this.activatedRoute.snapshot.paramMap.get('lineName') as string;
  dosingDeviceId = Number(this.activatedRoute.snapshot.paramMap.get('dosingNr'));
  measurements: Measurements[] = [];
  measurements$ = new BehaviorSubject<Measurements[]>([]);

  constructor(private httpService: HistoricalMeasurementsHttpService, private activatedRoute: ActivatedRoute) {
    this.getMeasurements();
  }

  private getMeasurements() {
    const {day} = this.filterForm.value as { day: string };
    this.httpService.getHistoricalMeasurements(this.lineName, day).subscribe(data => {
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

  filterByDay() {
    this.getMeasurements();
  }
}
