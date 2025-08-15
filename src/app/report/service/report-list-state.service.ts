import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ReportModel} from "../model/report.model";
import {DateFilterFormRange, DateFormHandler} from "../../shared/model/date-filter.form";
import {ReportHttpService} from "./report-http.service";

@Injectable()
export class ReportListStateService {
  private formHandler = new DateFormHandler();

  reports$ = new BehaviorSubject<ReportModel[] | null>(null);
  filterForm = this.formHandler.getFilterForm(DateFilterFormRange.MONTH);

  constructor(private httpService: ReportHttpService) {
    this.getReports();
  }

  getReports() {
    const range = this.filterForm.value as { from: string, to: string };
    this.httpService.getReports(range.from, range.to).subscribe((reports) => {
      this.reports$.next(reports);
    })
  }
}
