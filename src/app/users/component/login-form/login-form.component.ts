import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginForm} from "../../model/user-login.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input({required: true})
  loginForm!: FormGroup<LoginForm>;
  @Output()
  register = new EventEmitter();

  login() {
    this.register.emit();
  }
}
