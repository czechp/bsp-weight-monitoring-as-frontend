import {Component} from '@angular/core';
import {MenuElement} from "../../../shared/type/item-element.type";
import {getAllRoles, UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  menuElements: MenuElement[] = [
    {label: "Statystki", path: "statistics", icon: "chart-area", access: getAllRoles()},
    {label: "Linie/moduły wagowe", path: "production-lines-settings/production-line-add", icon: "scale-balanced", access: [UserRole.MAINTAINER, UserRole.ADMIN], absolute:true},
    {label: "Konfiguracja", path: "configuration", icon: "gear", access: [UserRole.MAINTAINER, UserRole.ADMIN]},
    {label: "Użytkownicy", path: "users", icon: "users", access: [UserRole.ADMIN]},
  ]
}
