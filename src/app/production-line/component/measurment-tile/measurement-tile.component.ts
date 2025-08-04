import {Component, Input, OnInit} from '@angular/core';
import {MeasurementModel, ProductModel} from "../../model/production-line.model";

@Component({
  selector: 'app-measurement-tile',
  templateUrl: './measurement-tile.component.html',
  styleUrls: ['./measurement-tile.component.scss']
})
export class MeasurementTileComponent implements OnInit {
  @Input() measurement!: MeasurementModel;
  @Input() product!: ProductModel;
  invalidWeight = true;

  ngOnInit(): void {
    const minimumWeight = this.product.productMinimumWeight;
    const maxWeight = this.product.productMaximumWeight;
    const weight = this.measurement.value;
    this.invalidWeight = weight < minimumWeight || weight > maxWeight;
  }



}
