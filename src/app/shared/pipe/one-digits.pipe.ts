import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneDigits'
})
export class OneDigitsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      if (value >= -0.09 && value < 0) {
        return Math.abs(value).toFixed(1);
      }
      return value.toFixed(1);
    }
    return value;
  }

}
