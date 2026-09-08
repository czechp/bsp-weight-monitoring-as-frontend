import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-historical-measurement-single-page',
  templateUrl: './historical-measurement-single-page.component.html',
  styleUrls: ['./historical-measurement-single-page.component.scss']
})
export class HistoricalMeasurementSinglePageComponent {
    productionLineId:number;
    constructor(private activatedRoute: ActivatedRoute) {
      this.productionLineId = this.activatedRoute.snapshot.params['id'];
    }
}
