import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HistoricalMeasurementModel} from "../model/historical-measurement.model";
import {BACKEND_URL} from "../../shared/configuration/URL";
import {ReportShiftModel} from "../../report/model/report.model";
import {
  ProductionLineMeasurements
} from "../component/historical-measurements-chart/historical-measurements-chart.component";

@Injectable({
  providedIn: 'root'
})
export class HistoricalMeasurementsHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getHistoricalMeasurements(lineName: string, day: string, shift:ReportShiftModel) {
    return this.httpClient.get<HistoricalMeasurementModel[]>(`${BACKEND_URL}/historical-measurements`, {
      params: {
        lineName,
        day,
        shift
      }
    });
  }

  getHistoricalMeasurementsForReport(reportId: number){
    return this.httpClient.get<ProductionLineMeasurements>(`${BACKEND_URL}/historical-measurements/report/${reportId}`);
  }
}
