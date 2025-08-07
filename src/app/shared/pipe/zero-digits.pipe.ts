import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ZeroDigits'
})
export class ZeroDigitsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      if (value >= -0.99 && value < 0) {
        return Math.abs(value).toFixed(0);
      }
      return value.toFixed(0);
    }
    return value;
  }

}
