import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

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
