import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ReportModel} from "../model/report.model";
import {ReportHttpService} from "./report-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatementService} from "../../shared/service/statement.service";

@Injectable()
export class ReportDetailsStateService {
  report$ = new BehaviorSubject<ReportModel | null>(null);
  reportId: number = this.activatedRoute.snapshot.params['id'];

  constructor(private httpService: ReportHttpService, private activatedRoute: ActivatedRoute, private router: Router, private statementService: StatementService) {
    this.getReport();
  }

  getReport() {
    this.httpService.getReportById(this.reportId)
      .subscribe(report => {
        this.report$.next(report);
      });
  }

  removeReport() {
    this.httpService.removeReport(this.reportId)
      .subscribe(() => {
        this.statementService.showSuccess("Raport został usunięty");
        this.router.navigate(['/reports']);
      });
  }
}
