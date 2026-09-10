import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeasurementsSampleModel} from "../component/measurements-sample-chart/measurements-sample-chart.component";
import {BACKEND_URL} from "../../shared/configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class MeasurementsSampleHttpService {

  constructor(private http: HttpClient) {
  }

  getSamplesForReport(reportId: number) {
    return this.http.get<MeasurementsSampleModel[]>(`${BACKEND_URL}/measurement-samples/report/${reportId}`);
  }

  getMeasurementsSample(productionLineId: number, from: string, to: string) {
    return this.http.get<MeasurementsSampleModel[]>(`${BACKEND_URL}/measurement-samples`, {
      params: {
        productionLineId: productionLineId,
        from: from,
        to: to
      }
    });
  }
}
