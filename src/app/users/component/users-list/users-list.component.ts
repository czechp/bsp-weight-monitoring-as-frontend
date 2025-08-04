import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../../model/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input({required: true})
  users!: UserModel[];

  @Output()
  userTileClicked = new EventEmitter<UserModel>();

  userChosen(user: UserModel) {
    this.userTileClicked.emit(user);
  }
}
