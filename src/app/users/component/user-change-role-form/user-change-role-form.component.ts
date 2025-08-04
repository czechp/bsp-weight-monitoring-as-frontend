import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserChangeRoleForm} from "../../model/user-change-role.model";
import {FormGroup} from "@angular/forms";
import {UserRole} from "../../model/user-info.model";

@Component({
  selector: 'app-user-change-role-form',
  templateUrl: './user-change-role-form.component.html',
  styleUrls: ['./user-change-role-form.component.scss']
})
export class UserChangeRoleFormComponent {
  @Input({required: true})
  changeRoleForm!: FormGroup<UserChangeRoleForm>;
  @Output()
  changeRole = new EventEmitter();
  roles: string[] = [UserRole.USER, UserRole.MAINTAINER, UserRole.ADMIN];

  onChangeRole() {
    this.changeRole.emit();
  }
}
