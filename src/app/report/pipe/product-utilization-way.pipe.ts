import {Pipe, PipeTransform} from '@angular/core';
import {ProductUtilizationWay} from "../model/alerts.model";

@Pipe({
  name: 'productUtilizationWay'
})
export class ProductUtilizationWayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const utilizationWay = value as ProductUtilizationWay;

    switch (utilizationWay) {
      case ProductUtilizationWay.PRODUCT_SEPARATED:
        return 'Wkłady poza tolerancją zostały odseparowane';
      case ProductUtilizationWay.UNDEFINED:
        return 'Brak informacji o utylizacji produktu';
    }
  }

}
