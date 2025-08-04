import { Component } from '@angular/core';
import {ReportDetailsStateService} from "../../service/report-details-state.service";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-report-details-page',
  templateUrl: './report-details-page.component.html',
  styleUrls: ['./report-details-page.component.scss'],
  providers:[ReportDetailsStateService]
})
export class ReportDetailsPageComponent {
  report$ = this.stateService.report$;

  constructor(private stateService: ReportDetailsStateService) {
  }

  protected readonly UserRole = UserRole;

  removeReport() {
    this.stateService.removeReport();
  }
}
