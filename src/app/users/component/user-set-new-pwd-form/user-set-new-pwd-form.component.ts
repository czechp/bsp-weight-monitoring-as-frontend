import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UserSetPasswordForm} from "../../model/user-set-password.model";

@Component({
  selector: 'app-user-set-new-pwd-form',
  templateUrl: './user-set-new-pwd-form.component.html',
  styleUrls: ['./user-set-new-pwd-form.component.scss']
})
export class UserSetNewPwdFormComponent {
  @Input() setNewPasswordForm!: FormGroup<UserSetPasswordForm>;
  @Output() setPassword = new EventEmitter<void>();

  onSetNewPwd() {
    this.setPassword.emit();
  }
}
