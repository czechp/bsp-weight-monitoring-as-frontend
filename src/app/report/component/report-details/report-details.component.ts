import {Component, Input} from '@angular/core';
import {ReportModel} from "../../model/report.model";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent {
  @Input() report!: ReportModel;
  protected readonly UserRole = UserRole;
}
