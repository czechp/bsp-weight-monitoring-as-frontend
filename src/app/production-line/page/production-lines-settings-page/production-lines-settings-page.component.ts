import {Component} from '@angular/core';
import {MenuElement} from "../../../shared/type/item-element.type";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-production-lines-settings-page',
  templateUrl: './production-lines-settings-page.component.html',
  styleUrls: ['./production-lines-settings-page.component.scss']
})
export class ProductionLinesSettingsPageComponent {
  menuElements: MenuElement[] = [
    {label: "Dodaj linie", path: "production-line-add", access: [UserRole.ADMIN, UserRole.MAINTAINER], icon: "add"},
    {label: "Edytuj/Usuń linie", path: "production-line-modify", access: [UserRole.ADMIN, UserRole.MAINTAINER], icon: "edit"},
  ];
}
