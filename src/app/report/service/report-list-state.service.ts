import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ReportModel} from "../model/report.model";
import {ReportFormHandler} from "../model/report.form";
import {ReportHttpService} from "./report-http.service";

@Injectable()
export class ReportListStateService {
  private formHandler = new ReportFormHandler();

  reports$ = new BehaviorSubject<ReportModel[] | null>(null);
  filterForm = this.formHandler.getFilterForm();

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
