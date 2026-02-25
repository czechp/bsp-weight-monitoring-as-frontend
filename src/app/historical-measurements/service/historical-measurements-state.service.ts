import {Injectable} from '@angular/core';
import {HistoricalMeasurementsHttpService} from "./historical-measurements-http.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ReportShiftModel} from "../../report/model/report.model";
import {currentTimeToShift} from "../../shared/service/utils";

export type Measurements = {
  dosingDeviceId: number;
  value: number;
  referenceValue: number;
  minValue: number;
  maxValue: number;
  createdAt: string;
}

export type MeasurementsData = {
  measurements: Measurements[];
  referenceValue: number;
  minValue: number;
  maxValue: number;
}

export type HistoricalMeasurementsFilterForm = {
  day: FormControl<string | null>;
  shift: FormControl<ReportShiftModel | null>;
}

@Injectable()
class HistoricalMeasurementsStateService {
  filterForm: FormGroup<HistoricalMeasurementsFilterForm>;
  lineName = this.activatedRoute.snapshot.paramMap.get('lineName') as string;
  selectedDosingDeviceId: number | null = null;
  measurementsData: MeasurementsData = {
    measurements: [],
    referenceValue: 0,
    minValue: 0,
    maxValue: 0
  };
  measurements$ = new BehaviorSubject<MeasurementsData>({
    measurements: [],
    referenceValue: 0,
    minValue: 0,
    maxValue: 0
  });

  constructor(private httpService: HistoricalMeasurementsHttpService, private activatedRoute: ActivatedRoute) {
    const dosingNrParam = this.activatedRoute.snapshot.paramMap.get('dosingNr');
    if (dosingNrParam) {
      this.selectedDosingDeviceId = Number(dosingNrParam);
    }
    this.filterForm = this.buildFilterForm();
    this.getMeasurements();
  }

  private getMeasurements() {
    const {day} = this.filterForm.value as { day: string };
    const shift = this.filterForm.value.shift as ReportShiftModel;
    this.httpService.getHistoricalMeasurements(this.lineName, day, shift).subscribe(data => {
      const allMeasurements: Measurements[] = [];

      // Flatten all measurements from all time points and all dosing devices
      data.forEach(timePoint => {
        timePoint.measurements.forEach(measurement => {
          allMeasurements.push({
            dosingDeviceId: measurement.dosingNr,
            value: measurement.value,
            referenceValue: timePoint.product.productCorrectWeight,
            minValue: timePoint.product.productMinimumWeight,
            maxValue: timePoint.product.productMaximumWeight,
            createdAt: timePoint.createdAt
          });
        });
      });

      this.measurementsData = {
        measurements: allMeasurements,
        referenceValue: data[0]?.product.productCorrectWeight || 0,
        minValue: data[0]?.product.productMinimumWeight || 0,
        maxValue: data[0]?.product.productMaximumWeight || 0
      };

      this.measurements$.next(this.measurementsData);
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
