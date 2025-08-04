import {Injectable} from '@angular/core';
import {createUserRestorePasswordForm, UserRestorePasswordModel} from "../model/user-restore-password.model";
import {BehaviorSubject} from "rxjs";
import {UsersHttpService} from "./users-http.service";
import {StatementService} from "../../shared/service/statement.service";
import {Router} from "@angular/router";

@Injectable()
export class UserRestorePasswordStateService {
  restorePasswordForm = createUserRestorePasswordForm();
  restorePasswordForm$ = new BehaviorSubject(this.restorePasswordForm);

  constructor(private httpClient: UsersHttpService, private statement: StatementService, private router: Router) {
  }

  restorePassword() {
    this.restorePasswordForm.markAllAsTouched();
    if (!this.restorePasswordForm.valid)
      return;
    const restoreModel = this.restorePasswordForm.value as UserRestorePasswordModel;
    this.httpClient.restorePassword(restoreModel)
      .subscribe(() => {
        this.statement.showSuccess("Check your email and use password restore token");
        this.router.navigate(['set-new-password']);
      })
  }
}
