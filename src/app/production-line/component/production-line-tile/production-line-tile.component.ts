import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductionLineModel} from "../../model/production-line.model";

export type MeasurementHistoryNavigation = {
  lineName: string;
  dosingNr: number;
};

@Component({
  selector: 'app-production-line-tile',
  templateUrl: './production-line-tile.component.html',
  styleUrls: ['./production-line-tile.component.scss']
})
export class ProductionLineTileComponent {
  @Input() productionLine!: ProductionLineModel;
  @Output() wrongProductClick = new EventEmitter<ProductionLineModel>();
  @Output() navigateToHistoryClick = new EventEmitter<MeasurementHistoryNavigation>();

  wrongProductOnClick() {
    this.wrongProductClick.emit(this.productionLine);
  }

  navigateToHistory(name: string, dosingNr: number) {
    this.navigateToHistoryClick.emit({lineName: name, dosingNr: dosingNr});
  }
}
