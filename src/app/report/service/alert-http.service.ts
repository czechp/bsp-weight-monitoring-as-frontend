import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlertModel} from "../model/alerts.model";
import {BACKEND_URL} from "../../shared/configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class AlertHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getAlerts(from: string, to: string, lineName: string | null) {
    const params: any = {from, to};
    if (lineName !== null && lineName !== 'null') {
      params.lineName = lineName;
    }
    return this.httpClient.get<AlertModel[]>(`${BACKEND_URL}/alerts`, {params});
  }
}
