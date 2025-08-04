import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'yesOrNo'
})
export class YesOrNoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? "YES" : "NO"
  }

}
