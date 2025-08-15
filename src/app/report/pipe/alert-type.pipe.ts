import {Pipe, PipeTransform} from '@angular/core';
import {AlertType} from "../model/alerts.model";

@Pipe({
  name: 'alertType'
})
export class AlertTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const alertType = value as AlertType;

    switch (alertType) {
      case AlertType.NORMAL:
        return 'Przekroczenie normy';
      case AlertType.CRITICAL:
        return 'Krytyczne przekroczenie normy';
    }
  }

}
