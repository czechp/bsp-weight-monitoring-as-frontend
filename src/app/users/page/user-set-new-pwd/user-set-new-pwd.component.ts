import {Component} from '@angular/core';
import {UserSetNewPasswordStateService} from "../../service/user-set-new-password-state.service";

@Component({
  selector: 'app-user-set-new-pwd',
  templateUrl: './user-set-new-pwd.component.html',
  styleUrls: ['./user-set-new-pwd.component.scss'],
  providers: [UserSetNewPasswordStateService]
})
export class UserSetNewPwdComponent {
  setNewPasswordForm$ = this.stateService.setNewPasswordForm$;

  constructor(private stateService: UserSetNewPasswordStateService) {
  }

  setNewPassword() {
    this.stateService.setNewPassword();
  }
}
