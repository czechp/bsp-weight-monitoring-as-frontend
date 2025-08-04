import {Component} from '@angular/core';
import {UsersListStateService} from "../../service/users-list-state.service";
import {UserModel} from "../../model/user.model";

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss'],
  providers: [UsersListStateService]
})
export class UsersListPageComponent {
  users$ = this.usersListStateService.users$;

  constructor(private usersListStateService: UsersListStateService) {
  }


  navigateToDetails(user: UserModel) {
    this.usersListStateService.navigateToUserDetails(user)
  }
}
