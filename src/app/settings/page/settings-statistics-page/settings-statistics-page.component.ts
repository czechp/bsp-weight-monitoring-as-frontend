import {Component} from '@angular/core';
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-settings-statistics-page',
  templateUrl: './settings-statistics-page.component.html',
  styleUrls: ['./settings-statistics-page.component.scss']
})
export class SettingsStatisticsPageComponent {

  protected readonly UserRole = UserRole;
}
