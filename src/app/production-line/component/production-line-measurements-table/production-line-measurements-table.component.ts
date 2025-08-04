import {Component, Input} from '@angular/core';
import {ProductionLineModel} from "../../model/production-line.model";

@Component({
  selector: 'app-production-line-measurements-table',
  templateUrl: './production-line-measurements-table.component.html',
  styleUrls: ['./production-line-measurements-table.component.scss']
})
export class ProductionLineMeasurementsTableComponent {
  @Input() productionLines!: ProductionLineModel[];

}
