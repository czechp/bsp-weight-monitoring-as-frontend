import {Component} from '@angular/core';
import {MenuElement} from "../../../shared/type/item-element.type";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-dashboard-edit-page',
  templateUrl: './dashboard-edit-page.component.html',
  styleUrls: ['./dashboard-edit-page.component.scss']
})
export class DashboardEditPageComponent {
    menuElements:MenuElement[] = [
      {label: "Edytuj", path: "/change-data", access: [UserRole.MAINTAINER, UserRole.ADMIN], icon: "edit"},
      {label: "Usuń", path: "delete", access: [UserRole.MAINTAINER, UserRole.ADMIN], icon: "trash"},
    ];

}
