import {Injectable} from '@angular/core';
import {AlertHttpService} from "./alert-http.service";
import {DateFilterFormRange} from "../../shared/model/date-filter.form";
import {AlertModel} from "../model/alerts.model";
import {BehaviorSubject} from "rxjs";
import {AlertFormHandler} from "../model/alerts.form";
import {ProductionLineHttpService} from "../../production-line/service/production-line-http.service";
import {ProductionLineModel} from "../../production-line/model/production-line.model";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class AlertsStateService {
  alerts$ = new BehaviorSubject<AlertModel[]>([]);
  productionLines$ = new BehaviorSubject<undefined | ProductionLineModel[]>(undefined);
  private formHandler = new AlertFormHandler();
  alertsFilterForm = this.formHandler.getFilterForm(DateFilterFormRange.DAY);

  constructor(private httpService: AlertHttpService, private productionLineHttp: ProductionLineHttpService, private activatedRoute: ActivatedRoute) {
    const lineName = this.activatedRoute.snapshot.queryParamMap.get('lineName');
    if (lineName) {
      this.getAlertForCurrentShiftAndLineName(lineName);
    } else {
      this.getAlerts();
    }
    this.productionLineHttp.getProductionLines().subscribe(
      lines => this.productionLines$.next(lines)
    );

  }

  getAlerts() {
    const params = this.alertsFilterForm.value as { from: string, to: string, lineName: string };
    this.httpService.getAlerts(params.from, params.to, params.lineName).subscribe(alerts => {
      this.alerts$.next(alerts);
    })
  }

  private getAlertForCurrentShiftAndLineName(lineName: string) {
    this.httpService.getAlertsForCurrentShiftAndLineName(lineName).subscribe(alerts => this.alerts$.next(alerts));
  }
}
