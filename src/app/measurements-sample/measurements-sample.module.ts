import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementsSampleChartComponent } from './component/measurements-sample-chart/measurements-sample-chart.component';



@NgModule({
  declarations: [
    MeasurementsSampleChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MeasurementsSampleChartComponent
  ]
})
export class MeasurementsSampleModule { }
