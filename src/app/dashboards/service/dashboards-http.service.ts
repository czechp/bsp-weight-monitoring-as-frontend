import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DashboardCreateModel, DashboardModel, DashboardRemoveModel} from "../model/dashboard.model";
import {BACKEND_URL} from "../../shared/configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class DashboardsHttpService {

  constructor(private httpService: HttpClient) { }

  getDashboards():Observable<DashboardModel[]> {
    return this.httpService.get<DashboardModel[]>(`${BACKEND_URL}/dashboards`);
  }

  createDashboard(dashboardCreateModel: DashboardCreateModel) {
    return this.httpService.post<DashboardModel>(`${BACKEND_URL}/dashboards`, dashboardCreateModel);
  }

  removeDashboard(dashboardId: DashboardRemoveModel): Observable<void> {
    return this.httpService.delete<void>(`${BACKEND_URL}/dashboards`, {body: dashboardId});
  }
}
