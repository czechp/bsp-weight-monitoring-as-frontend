import {Component, Input} from '@angular/core';
import {ReportModel} from "../../model/report.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {
  @Input() reports!: ReportModel[];

  constructor(private router: Router) {
  }

  navigateToDetails(reportId: number) {
    this.router.navigate(["/report-details", reportId]);
  }
}
