import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ReportModel} from "../model/report.model";
import {DateFilterFormRange, DateFormHandler} from "../../shared/model/date-filter.form";
import {ReportHttpService} from "./report-http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class ReportListStateService {
  private formHandler = new DateFormHandler();
  private isBrc = false;

  reports$ = new BehaviorSubject<ReportModel[] | null>(null);
  filterForm = this.formHandler.getFilterForm(DateFilterFormRange.MONTH);

  constructor(private httpService: ReportHttpService, private activatedRouter: ActivatedRoute, private router: Router) {
    this.getReports();
    this.activatedRouter.params.subscribe(params => {
      this.isBrc = params['brc'];
    });
  }

  getReports() {
    const range = this.filterForm.value as { from: string, to: string };
    this.httpService.getReports(range.from, range.to).subscribe((reports) => {
      this.reports$.next(reports);
    })
  }

  navigateToDetails(reportId: number) {
    if (this.isBrc) {
      this.router.navigate(["report-brc-details", reportId]);
    }
    else
      this.router.navigate(["report-details", reportId]);
  }
}
