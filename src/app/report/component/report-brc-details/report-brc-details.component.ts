import {Component, Input} from '@angular/core';
import {ReportModel} from "../../model/report.model";

@Component({
  selector: 'app-report-brc-details',
  templateUrl: './report-brc-details.component.html',
  styleUrls: ['./report-brc-details.component.scss']
})
export class ReportBrcDetailsComponent {
  @Input() report!: ReportModel;

}
