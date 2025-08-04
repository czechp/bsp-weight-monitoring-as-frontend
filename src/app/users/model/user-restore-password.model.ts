import {FormControl, FormGroup, Validators} from "@angular/forms";

export type UserRestorePasswordModel = {
  email: string,
}

export type UserRestorePasswordForm = {
  email: FormControl<string | null>
}

export function createUserRestorePasswordForm() {
  return new FormGroup<UserRestorePasswordForm>({
    email: new FormControl("", [Validators.required, Validators.email]),
  })
}
