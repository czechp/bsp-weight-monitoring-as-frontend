import { Pipe, PipeTransform } from '@angular/core';
import {Unit} from "../type/unit";

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(value: Unit, ...args: unknown[]): unknown {
    return null;
  }

}
