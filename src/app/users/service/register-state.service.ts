import {BehaviorSubject} from "rxjs";
import {createRegisterForm, registerFormToModel} from "../model/user-register.model";
import {StatementService} from "../../shared/service/statement.service";
import {Injectable} from "@angular/core";
import {UsersHttpService} from "./users-http.service";
import {Router} from "@angular/router";

@Injectable()
export class RegisterStateService {
  private registerForm = createRegisterForm();
  registerForm$ = new BehaviorSubject(this.registerForm);

  constructor(private statementService: StatementService, private httpClient: UsersHttpService, private router: Router) {
  }

  register() {
    this.registerForm.markAllAsTouched();
    const rawData = this.registerForm.getRawValue();
    if (this.registerForm.invalid)
      return;
    if (rawData.password !== rawData.passwordConfirm) {
      this.statementService.showError("Hasła nie pasują!");
      return;
    }
    const registerModel = registerFormToModel(this.registerForm);
    this.httpClient.registerUser(registerModel).subscribe(() => {
      this.router.navigate(['confirm-email']);
    })
  }
}
