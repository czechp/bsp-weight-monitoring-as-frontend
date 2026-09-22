import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionLineStatusChartComponent } from './component/production-line-status-chart/production-line-status-chart.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    ProductionLineStatusChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    ProductionLineStatusChartComponent
  ]
})
export class ProductionLineStatusModule { }
