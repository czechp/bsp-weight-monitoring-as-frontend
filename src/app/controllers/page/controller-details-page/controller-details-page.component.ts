import {Component} from '@angular/core';
import {MenuElement} from "../../../shared/type/item-element.type";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-controller-details-page',
  templateUrl: './controller-details-page.component.html',
  styleUrls: ['./controller-details-page.component.scss']
})
export class ControllerDetailsPageComponent {
  menuElements: MenuElement[] = [
    {label: "Sterownik", path: "details", icon:"microchip", access: [UserRole.ADMIN, UserRole.MAINTAINER]},
    {label: "I/O", path: "process-values", icon:"arrow-right-arrow-left", access: [UserRole.ADMIN, UserRole.MAINTAINER]},
    {label: "Dodaj I/O", path: "process-value-create", icon:"plus", access: [UserRole.ADMIN, UserRole.MAINTAINER]}
  ];

}
