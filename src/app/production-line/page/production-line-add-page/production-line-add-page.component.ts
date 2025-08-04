import {Component} from '@angular/core';
import {ProductionLineAddStateService} from "../../service/production-line-add-state.service";

@Component({
  selector: 'app-production-line-add-page',
  templateUrl: './production-line-add-page.component.html',
  styleUrls: ['./production-line-add-page.component.scss'],
  providers: [ProductionLineAddStateService]
})
export class ProductionLineAddPageComponent {
  addForm = this.stateService.addProductionLineForm;

  constructor(private stateService: ProductionLineAddStateService) {
  }

  addProductionLine() {
    this.stateService.addProductionLine();
  }
}
