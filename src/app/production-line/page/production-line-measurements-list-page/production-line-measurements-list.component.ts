import { Component } from '@angular/core';
import {
  ProductionLineMeasurementsListStateService
} from "../../service/production-line-measurements-list-state.service";

@Component({
  selector: 'app-production-line-measurements-list-page',
  templateUrl: './production-line-measurements-list.component.html',
  styleUrls: ['./production-line-measurements-list.component.scss'],
  providers:[ProductionLineMeasurementsListStateService]
})
export class ProductionLineMeasurementsListComponent {
  productionLines$ = this.stateService.productionLines$;

  constructor(private stateService: ProductionLineMeasurementsListStateService) {
  }
}
