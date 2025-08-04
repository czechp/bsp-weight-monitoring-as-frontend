import {Component} from '@angular/core';
import {UserRestorePasswordStateService} from "../../service/user-restore-password-state.service";

@Component({
  selector: 'app-user-restore-password-page',
  templateUrl: './user-restore-password-page.component.html',
  styleUrls: ['./user-restore-password-page.component.scss'],
  providers: [UserRestorePasswordStateService]
})
export class UserRestorePasswordPageComponent {
  restorePasswordForm$ = this.stateService.restorePasswordForm$;

  constructor(private stateService: UserRestorePasswordStateService) {
  }

  restorePassword() {
    this.stateService.restorePassword();
  }
}
