import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductionLineModel} from "../../model/production-line.model";

@Component({
  selector: 'app-production-line-list',
  templateUrl: './production-line-list.component.html',
  styleUrls: ['./production-line-list.component.scss']
})
export class ProductionLineListComponent {
  @Input()
  productionLines!: ProductionLineModel[];
  @Output()
  wrongProductClick = new EventEmitter<ProductionLineModel>();

  wrongProductOnClick(productionLineModel: ProductionLineModel) {
    this.wrongProductClick.next(productionLineModel);
  }
}
