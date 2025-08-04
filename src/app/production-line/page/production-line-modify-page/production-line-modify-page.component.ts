import {Component} from '@angular/core';
import {ProductionLineModifyStateService} from "../../service/production-line-modify-state.service";
import {ProductionLineModel} from "../../model/production-line.model";

@Component({
  selector: 'app-production-line-modify-page',
  templateUrl: './production-line-modify-page.component.html',
  styleUrls: ['./production-line-modify-page.component.scss'],
  providers: [ProductionLineModifyStateService]
})
export class ProductionLineModifyPageComponent {
  productionLines$ = this.stateService.productionLines$;
  selectedProductionLine$ = this.stateService.selectedProductionLine$;
  selectedProductionLineForm$ = this.stateService.selectedProductionLineForm$;

  constructor(private stateService: ProductionLineModifyStateService) {
  }

  selectProductionLine(productionLine: ProductionLineModel): void {
    this.stateService.selectProductionLine(productionLine);
  }

  deleteProductionLine() {
    this.stateService.deleteProductionLine();
  }

  modifyProductionLine() {
    this.stateService.modifyProductionLine();
  }
}
