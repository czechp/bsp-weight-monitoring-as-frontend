import { Component } from '@angular/core';
import {ProductionLineListStateService} from "../../service/production-line-list-state.service";
import {ProductionLineModel} from "../../model/production-line.model";

@Component({
  selector: 'app-production-line-list-page',
  templateUrl: './production-line-list-page.component.html',
  styleUrls: ['./production-line-list-page.component.scss'],
  providers: [ProductionLineListStateService]
})
export class ProductionLineListPageComponent {
  productionLines$ = this.productionLineListStateService.productionLines$;

  constructor(private productionLineListStateService: ProductionLineListStateService) { }

  navigateToAlerts(productionLine: ProductionLineModel) {
    this.productionLineListStateService.navigateToAlerts(productionLine);
  }
}
