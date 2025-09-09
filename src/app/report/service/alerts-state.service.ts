import {Injectable} from '@angular/core';
import {AlertHttpService} from "./alert-http.service";
import {DateFilterFormRange, DateFormHandler} from "../../shared/model/date-filter.form";
import {AlertModel} from "../model/alerts.model";
import {BehaviorSubject} from "rxjs";
import {AlertFormHandler} from "../model/alerts.form";
import {ProductionLineHttpService} from "../../production-line/service/production-line-http.service";
import {ProductionLineModel} from "../../production-line/model/production-line.model";

@Injectable()
export class AlertsStateService {
  alerts$ = new BehaviorSubject<AlertModel[]>([]);
  private formHandler = new AlertFormHandler();
  alertsFilterForm = this.formHandler.getFilterForm(DateFilterFormRange.DAY);
  productionLines$ = new BehaviorSubject<undefined | ProductionLineModel[]>(undefined);

  constructor(private httpService: AlertHttpService, private productionLineHttp: ProductionLineHttpService) {
    this.getAlerts();
    this.productionLineHttp.getProductionLines().subscribe(
      lines => this.productionLines$.next(lines)
    )
  }

  getAlerts() {
    const params = this.alertsFilterForm.value as { from: string, to: string, lineName: string };
    this.httpService.getAlerts(params.from, params.to, params.lineName).subscribe(alerts => {
      this.alerts$.next(alerts);
    })
  }
}
