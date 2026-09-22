import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/configuration/URL";
import {
  ProductionLineStatusModel
} from "../component/production-line-status-chart/production-line-status-chart.component";

@Injectable({
  providedIn: 'root'
})
export class ProductionLineStatusHttpService {

  constructor(private http: HttpClient) { }

  getProductionLineStatuses(productionLineId: number, from: string, to: string) {
    return this.http.get<ProductionLineStatusModel[]>(`${BACKEND_URL}/production-line-statuses`, {
      params: {
        productionLineId: productionLineId,
        from: from,
        to: to
      }
    });
  }

  getStatusesForReport(id: number) {
    return this.http.get<ProductionLineStatusModel[]>(`${BACKEND_URL}/production-line-statuses/report/${id}`);
  }
}
