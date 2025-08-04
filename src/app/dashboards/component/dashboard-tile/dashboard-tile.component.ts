import {Component, Input} from '@angular/core';
import {DashboardModel} from "../../model/dashboard.model";
import {ElementState} from "../../../shared/directive/element-state.directive";
import {IconName} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent {
  _dashboard!: DashboardModel;
  icon: IconName = 'question-circle';

  @Input() set dashboard(dashboard: DashboardModel) {
    this._dashboard = dashboard;
    this.icon = dashboard.icon.fontAwesomeName as IconName;
  }


}
