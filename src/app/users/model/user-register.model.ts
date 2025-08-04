import {FormControl, FormGroup, Validators} from "@angular/forms";

export type UserRegisterModel = {
  username: string;
  password: string;
  email: string;
}

export type RegisterForm = {
  username: FormControl<string | null>,
  password: FormControl<string | null>,
  passwordConfirm: FormControl<string | null>,
  email: FormControl<string | null>,
}

export function createRegisterForm() {
  return new FormGroup<RegisterForm>({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
}

export function registerFormToModel(registerForm: FormGroup<RegisterForm>): UserRegisterModel {
  const formData = registerForm.getRawValue();
  return {
    username: formData.username as string,
    password: formData.password as string,
    email: formData.email as string,
  }
}
