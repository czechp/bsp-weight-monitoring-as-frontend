import {Component} from '@angular/core';
import {UserManagementStateService} from "../../service/user-management-state.service";

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss'],
  providers: [UserManagementStateService]
})
export class UserManagementPageComponent {
  user$ = this.userService.user$;
  userInfo$ = this.userService.userInfo$;
  userChangeRoleForm$ = this.userService.userChangeRoleForm$;

  constructor(private userService: UserManagementStateService) {
  }

  userActivation(activation: boolean) {
    this.userService.userActivation(activation);
  }

  changeRole() {
    this.userService.changeRole();
  }

  removeUser() {
    this.userService.removeUser();
  }
}
