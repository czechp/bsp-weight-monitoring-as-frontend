import {FormControl, FormGroup, Validators} from "@angular/forms";

export type UserSetPasswordModel = {
  restoreToken: string;
  newPassword: string;
}

export type UserSetPasswordForm = {
  restoreToken: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordConfirm: FormControl<string | null>;
}

export function createUserSetPasswordForm() {
  return new FormGroup<UserSetPasswordForm>({
    restoreToken: new FormControl("", [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
}

export function convertUserSetPasswordFormToModel(form: FormGroup<UserSetPasswordForm>): UserSetPasswordModel {
  return {
    restoreToken: form.get("restoreToken")?.value as string,
    newPassword: form.get("password")?.value as string
  }
}
