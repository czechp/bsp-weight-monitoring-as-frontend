import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {createLoginForm, UserLoginModel} from "../model/user-login.model";
import {UsersHttpService} from "./users-http.service";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class LoginStateService {
  private loginForm = createLoginForm();
  loginForm$ = new BehaviorSubject(this.loginForm);

  constructor(private httpService: UsersHttpService, private authenticationService: AuthenticationService, private router: Router) {
  }

  register() {
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid)
      return;
    const loginModel = this.loginForm.value as UserLoginModel;
    this.httpService.loginUser(loginModel).subscribe(userLoginModel => {
      this.authenticationService.login(userLoginModel, loginModel);
      this.router.navigate(['/']);
    })
  }

  navigateToRegistration() {
    this.router.navigate(['register']);
  }

  navigateToRestorePassword() {
    this.router.navigate(['restore-password']);
  }
}
