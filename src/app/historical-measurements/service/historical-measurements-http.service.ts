import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HistoricalMeasurementModel} from "../model/historical-measurement.model";
import {BACKEND_URL} from "../../shared/configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class HistoricalMeasurementsHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getHistoricalMeasurements(lineName: string, from: string, to: string) {
    return this.httpClient.get<HistoricalMeasurementModel[]>(`${BACKEND_URL}/historical-measurements`, {
      params: {
        lineName,
        from,
        to
      }
    });
  }
}
