import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../../model/user.model";

@Component({
  selector: 'app-activate-user-form',
  templateUrl: './activate-user-form.component.html',
  styleUrls: ['./activate-user-form.component.scss']
})
export class ActivateUserFormComponent {

  @Input({required: true})
  user!: UserModel;

  @Output()
  userActivation = new EventEmitter<boolean>();

  activateUser() {
    this.userActivation.emit(true);
  }

  deactivateUser() {
    this.userActivation.emit(false);
  }
}
