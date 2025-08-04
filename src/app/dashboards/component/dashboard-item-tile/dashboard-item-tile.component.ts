import {Component, Input} from '@angular/core';
import { DashboardItemModel } from '../../model/dashboard.model';

@Component({
  selector: 'app-dashboard-item-tile',
  templateUrl: './dashboard-item-tile.component.html',
  styleUrls: ['./dashboard-item-tile.component.scss']
})
export class DashboardItemTileComponent {
  @Input() dashboardItem!: DashboardItemModel;

}
