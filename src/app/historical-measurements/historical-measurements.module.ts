import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HistoricalMeasurementsPageComponent } from './page/historical-measurements-page/historical-measurements-page.component';
import { HistoricalMeasurementsChartComponent } from './component/historical-measurements-chart/historical-measurements-chart.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    HistoricalMeasurementsPageComponent,
    HistoricalMeasurementsChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgChartsModule
  ]
})
export class HistoricalMeasurementsModule { }
