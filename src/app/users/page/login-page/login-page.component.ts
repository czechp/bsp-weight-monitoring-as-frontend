import {Component} from '@angular/core';
import {LoginStateService} from "../../service/login-state.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginStateService]
})
export class LoginPageComponent {
  loginForm$ = this.loginStateService.loginForm$;

  constructor(private loginStateService: LoginStateService) {
  }

  register() {
    this.loginStateService.register();
  }

  navigateToRegistration() {
    this.loginStateService.navigateToRegistration();
  }

  restorePassword() {
    this.loginStateService.navigateToRestorePassword();
  }
}
