import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementsSampleChartComponent } from './component/measurements-sample-chart/measurements-sample-chart.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    MeasurementsSampleChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    MeasurementsSampleChartComponent
  ]
})
export class MeasurementsSampleModule { }
