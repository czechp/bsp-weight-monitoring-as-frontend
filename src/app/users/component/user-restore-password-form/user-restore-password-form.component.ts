import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserRestorePasswordForm} from "../../model/user-restore-password.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-restore-password-form',
  templateUrl: './user-restore-password-form.component.html',
  styleUrls: ['./user-restore-password-form.component.scss']
})
export class UserRestorePasswordFormComponent {
  @Input() restorePasswordForm!: FormGroup<UserRestorePasswordForm>;
  @Output() restorePassword = new EventEmitter();

  onRestorePassword() {
    this.restorePassword.emit();
  }
}
