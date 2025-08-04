import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportModel} from "../model/report.model";
import {BACKEND_URL} from "../../shared/configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class ReportHttpService {

  constructor(private httpService: HttpClient) {
  }

  getReports(from: string, to: string) {
    return this.httpService.get<ReportModel[]>(`${BACKEND_URL}/reports`, {params: {from, to}});
  }

  getReportById(reportId: number) {
    return this.httpService.get<ReportModel>(`${BACKEND_URL}/reports/${reportId}`);
  }

  removeReport(reportId: number) {
    return this.httpService.delete(`${BACKEND_URL}/reports/${reportId}`);
  }
}
