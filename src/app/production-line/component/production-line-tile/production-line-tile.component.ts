import {Component, Input} from '@angular/core';
import {ProductionLineModel} from "../../model/production-line.model";

@Component({
  selector: 'app-production-line-tile',
  templateUrl: './production-line-tile.component.html',
  styleUrls: ['./production-line-tile.component.scss']
})
export class ProductionLineTileComponent {
  @Input() productionLine!: ProductionLineModel;

}
