import {Component} from '@angular/core';
import {RegisterStateService} from "../../service/register-state.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  providers: [RegisterStateService]
})
export class RegisterPageComponent {
  registerForm$ = this.stateService.registerForm$;

  constructor(private stateService: RegisterStateService) {
  }

  register() {
    this.stateService.register();
  }
}
