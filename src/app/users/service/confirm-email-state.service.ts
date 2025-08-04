import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {ConfirmEmailForm, createConfirmEmailForm} from "../model/user-confirm-email.model";
import {UsersHttpService} from "./users-http.service";
import {StatementService} from "../../shared/service/statement.service";
import {Router} from "@angular/router";

@Injectable()
export class ConfirmEmailStateService {
  confirmEmailForm = createConfirmEmailForm();
  confirmEmailForm$ = new BehaviorSubject<FormGroup<ConfirmEmailForm>>(this.confirmEmailForm)

  constructor(private userHttpService: UsersHttpService, private statementService: StatementService, private router: Router) {
  }

  confirmEmail() {
    this.confirmEmailForm.markAllAsTouched();
    if (this.confirmEmailForm.invalid)
      return;
    const confirmationToken = this.confirmEmailForm.getRawValue().confirmationToken as string;
    this.userHttpService.confirmEmail(confirmationToken)
      .subscribe(() => {
        this.statementService.showSuccess("Email confirmed. Wait for administrator confirmation to be able to use the account");
        this.router.navigate(["login"]);
      })
  }
}
