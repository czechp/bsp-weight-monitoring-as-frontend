import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductionLineModel} from "../../model/production-line.model";
import {MeasurementHistoryNavigation} from "../production-line-tile/production-line-tile.component";

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
  @Output()
  navigateToHistoryClick = new EventEmitter<MeasurementHistoryNavigation>();

  wrongProductOnClick(productionLineModel: ProductionLineModel) {
    this.wrongProductClick.next(productionLineModel);
  }

  navigateToHistory(measurementHistoryNavigation: MeasurementHistoryNavigation) {
    this.navigateToHistoryClick.emit(measurementHistoryNavigation);
  }
}
