import { Component } from '@angular/core';
import {ReportListStateService} from "../../service/report-list-state.service";

@Component({
  selector: 'app-report-list-page',
  templateUrl: './report-list-page.component.html',
  styleUrls: ['./report-list-page.component.scss'],
  providers: [ReportListStateService]
})
export class ReportListPageComponent {
  filterForm = this.stateService.filterForm;
  reports$ = this.stateService.reports$;

  constructor(private stateService: ReportListStateService) {
  }

  applyFilter() {
    this.stateService.getReports();
  }

  navigateToDetails(reportId: number) {
    this.stateService.navigateToDetails(reportId);
  }
}
