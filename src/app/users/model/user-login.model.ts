import {FormControl, FormGroup, Validators} from "@angular/forms";

export type UserLoginModel = {
  username: string,
  password: string,
}

export type LoginForm = {
  username: FormControl<string | null>,
  password: FormControl<string | null>,
}

export function createLoginForm(): FormGroup<LoginForm> {
  return new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  })
}
