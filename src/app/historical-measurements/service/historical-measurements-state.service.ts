import {Injectable} from '@angular/core';
import {HistoricalMeasurementsHttpService} from "./historical-measurements-http.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ReportShiftModel} from "../../report/model/report.model";
import {currentTimeToShift} from "../../shared/service/utils";

export type Measurements = {
  value: number;
  referenceValue: number;
  minValue: number;
  maxValue: number;
  createdAt: string;
}

export type HistoricalMeasurementsFilterForm = {
  day: FormControl<string | null>;
  shift: FormControl<ReportShiftModel | null>;
}

@Injectable()
class HistoricalMeasurementsStateService {
  filterForm: FormGroup<HistoricalMeasurementsFilterForm>;
  lineName = this.activatedRoute.snapshot.paramMap.get('lineName') as string;
  dosingDeviceId = Number(this.activatedRoute.snapshot.paramMap.get('dosingNr'));
  measurements: Measurements[] = [];
  measurements$ = new BehaviorSubject<Measurements[]>([]);

  constructor(private httpService: HistoricalMeasurementsHttpService, private activatedRoute: ActivatedRoute) {
    this.filterForm = this.buildFilterForm();
    this.getMeasurements();
  }

  private getMeasurements() {
    const {day} = this.filterForm.value as { day: string };
    const shift = this.filterForm.value.shift as ReportShiftModel;
    this.httpService.getHistoricalMeasurements(this.lineName, day, shift).subscribe(data => {
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

  private buildFilterForm() :FormGroup<HistoricalMeasurementsFilterForm>{
    return new FormGroup({
      day: new FormControl<string | null>(new Date().toISOString().split('T')[0]),
      shift: new FormControl<ReportShiftModel | null>(currentTimeToShift())
    })
  }
}

export default HistoricalMeasurementsStateService
