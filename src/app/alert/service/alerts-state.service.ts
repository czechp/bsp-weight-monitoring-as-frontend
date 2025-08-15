import {Injectable} from '@angular/core';
import {AlertHttpService} from "./alert-http.service";
import {DateFilterFormRange, DateFormHandler} from "../../shared/model/date-filter.form";
import {AlertModel} from "../model/alerts.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AlertsStateService {
  alerts$ = new BehaviorSubject<AlertModel[]>([]);
  private formHandler = new DateFormHandler();
  alertsFilterForm = this.formHandler.getFilterForm(DateFilterFormRange.DAY);

  constructor(private httpService: AlertHttpService) {
    this.getAlerts();
  }

  getAlerts() {
    const range = this.alertsFilterForm.value as { from: string, to: string };
    this.httpService.getAlerts(range.from, range.to).subscribe(alerts => {
      this.alerts$.next(alerts);
    })
  }
}
