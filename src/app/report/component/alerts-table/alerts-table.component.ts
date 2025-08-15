import {Component, Input} from '@angular/core';
import {AlertModel, AlertType} from "../../model/alerts.model";

@Component({
  selector: 'app-alerts-table',
  templateUrl: './alerts-table.component.html',
  styleUrls: ['./alerts-table.component.scss']
})
export class AlertsTableComponent {
  @Input() alerts!: AlertModel[];

  public AlertType = AlertType;
}
