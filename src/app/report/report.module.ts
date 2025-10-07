import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportListPageComponent} from './page/report-list-page/report-list-page.component';
import {ReportListComponent} from './component/report-list/report-list.component';
import {SharedModule} from "../shared/shared.module";
import {DateFilterFormComponent} from '../shared/component/date-filter-form/date-filter-form.component';
import {ReportDetailsPageComponent} from './page/report-details-page/report-details-page.component';
import {ReportDetailsComponent} from './component/report-details/report-details.component';
import {ProductionLineModule} from "../production-line/production-line.module";
import {
  ProductionEfficiencyChartComponent
} from './component/production-efficiency-chart/production-efficiency-chart.component';
import {NgChartsModule} from "ng2-charts";
import {WeightCorrectnessChartComponent} from './component/weight-correctnes-chart/weight-correctness-chart.component';
import {AlertsTableComponent} from "./component/alerts-table/alerts-table.component";
import {AlertTypePipe} from "./pipe/alert-type.pipe";
import {ProductUtilizationWayPipe} from "./pipe/product-utilization-way.pipe";
import {AlertsPageComponent} from "./page/alerts-page/alerts-page.component";
import {AlertFilterFormComponent} from './component/alert-filter-form/alert-filter-form.component';
import {ReportBrcDetailsPageComponent} from './page/report-brc-details-page/report-brc-details-page.component';
import { ReportBrcDetailsComponent } from './component/report-brc-details/report-brc-details.component';


@NgModule({
  declarations: [
    ReportListPageComponent,
    ReportListComponent,
    ReportDetailsPageComponent,
    ReportDetailsComponent,
    ProductionEfficiencyChartComponent,
    WeightCorrectnessChartComponent,
    AlertsTableComponent,
    AlertTypePipe,
    ProductUtilizationWayPipe,
    AlertsPageComponent,
    AlertFilterFormComponent,
    ReportBrcDetailsPageComponent,
    ReportBrcDetailsComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule, SharedModule, ProductionLineModule, NgChartsModule
  ]
})
export class ReportModule {
}
