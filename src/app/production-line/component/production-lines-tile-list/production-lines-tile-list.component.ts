import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductionLineModel} from '../../model/production-line.model';

@Component({
  selector: 'app-production-lines-tile-list',
  templateUrl: './production-lines-tile-list.component.html',
  styleUrls: ['./production-lines-tile-list.component.scss']
})
export class ProductionLinesTileListComponent {
  @Input() productionLines!: ProductionLineModel[];
  @Output() selectedProductionLine = new EventEmitter<ProductionLineModel>();

  selectProductionLine(productionLine: ProductionLineModel): void {
    this.selectedProductionLine.emit(productionLine);
  }
}
