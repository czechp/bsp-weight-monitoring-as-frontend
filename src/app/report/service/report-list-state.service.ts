import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ReportModel} from "../model/report.model";
import {DateFilterFormRange, DateFormHandler} from "../../shared/model/date-filter.form";
import {ReportHttpService} from "./report-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FTService} from "../../shared/service/fts";

@Injectable()
export class ReportListStateService {
  reports$ = new BehaviorSubject<ReportModel[] | null>(null);
  reports: ReportModel[] = [];
  private formHandler = new DateFormHandler();
  filterForm = this.formHandler.getFilterForm(DateFilterFormRange.WEEK);
  private isBrc = false;

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
      this.reports = reports;
    })
  }

  navigateToDetails(reportId: number) {
    if (this.isBrc) {
      this.router.navigate(["report-brc-details", reportId]);
    } else
      this.router.navigate(["report-details", reportId]);
  }

  filterReport(phrase: string) {
    if (phrase && phrase.length > 1) {
      const filtered = FTService.search(this.reports, ['lineName', 'product.productName'], phrase);
      this.reports$.next(filtered);
    } else
      this.reports$.next(this.reports);
  }
}
