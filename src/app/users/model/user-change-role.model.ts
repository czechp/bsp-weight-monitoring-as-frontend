import {UserRole} from "./user-info.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export type UserChangeRoleModel = {
  role: UserRole
}

export type UserChangeRoleForm = {
  role: FormControl<string | null>
}

export function createUserChangeRoleForm(role: UserRole) {
  return new FormGroup<UserChangeRoleForm>({
    role: new FormControl(role, [Validators.required]),
  })
}
