import {FormControl, FormGroup, Validators} from "@angular/forms";

export type ConfirmEmailForm = {
  confirmationToken: FormControl<string | null>
}

export function createConfirmEmailForm() {
  return new FormGroup<ConfirmEmailForm>({
    confirmationToken: new FormControl('', [Validators.required, Validators.minLength(36)]),
  })
}
