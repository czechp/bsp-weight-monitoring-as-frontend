import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DashboardModel} from '../../model/dashboard.model';

@Component({
  selector: 'app-dashboards-list',
  templateUrl: './dashboards-list.component.html',
  styleUrls: ['./dashboards-list.component.scss']
})
export class DashboardsListComponent {
  @Input() dashboards!: DashboardModel[];
  @Output() dashboardClick = new EventEmitter<DashboardModel>();

  dashboardOnClick(dashboard: DashboardModel): void {
    this.dashboardClick.emit(dashboard);
  }
}
