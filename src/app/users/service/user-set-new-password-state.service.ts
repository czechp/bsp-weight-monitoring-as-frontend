import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {convertUserSetPasswordFormToModel, createUserSetPasswordForm} from "../model/user-set-password.model";
import {StatementService} from "../../shared/service/statement.service";
import {UsersHttpService} from "./users-http.service";
import {Router} from "@angular/router";

@Injectable()
export class UserSetNewPasswordStateService {
  setNewPasswordForm = createUserSetPasswordForm();
  setNewPasswordForm$ = new BehaviorSubject(this.setNewPasswordForm);

  constructor(private statement: StatementService, private httpClient: UsersHttpService, private router: Router) {
  }

  setNewPassword() {
    this.setNewPasswordForm.markAllAsTouched();
    if (this.setNewPasswordForm.invalid)
      return;

    const password = this.setNewPasswordForm.get('password')?.value as string;
    const passwordConfirm = this.setNewPasswordForm.get('passwordConfirm')?.value as string;
    if (password !== passwordConfirm) {
      this.statement.showError("Passwords do not match");
      return;
    }

    const newPasswordModel = convertUserSetPasswordFormToModel(this.setNewPasswordForm);
    this.httpClient.setNewPassword(newPasswordModel).subscribe(() => {
      this.statement.showSuccess("Hasło zostało zmienione");
      this.router.navigate(['login']);
    });
  }
}
