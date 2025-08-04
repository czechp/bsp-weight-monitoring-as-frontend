import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ipValidator(): ValidatorFn {
  const ipRegex = /^(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})){3}$/;

  return (control: AbstractControl): ValidationErrors | null => {
    const valid = ipRegex.test(control.value);
    return valid ? null : { invalidIp: true };
  };
}
