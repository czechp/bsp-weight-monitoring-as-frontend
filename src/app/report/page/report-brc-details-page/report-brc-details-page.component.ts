import {Component} from '@angular/core';
import {ReportDetailsStateService} from "../../service/report-details-state.service";

@Component({
  selector: 'app-report-brc-details-page',
  templateUrl: './report-brc-details-page.component.html',
  styleUrls: ['./report-brc-details-page.component.scss'],
  providers: [ReportDetailsStateService]
})
export class ReportBrcDetailsPageComponent {
  report$= this.stateService.report$;

  constructor(private stateService: ReportDetailsStateService) {
  }
}
