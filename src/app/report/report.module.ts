import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportListPageComponent} from './page/report-list-page/report-list-page.component';
import {ReportListComponent} from './component/report-list/report-list.component';
import {SharedModule} from "../shared/shared.module";
import { DateFilterFormComponent } from './component/date-filter-form/date-filter-form.component';
import { ReportDetailsPageComponent } from './page/report-details-page/report-details-page.component';
import { ReportDetailsComponent } from './component/report-details/report-details.component';
import {ProductionLineModule} from "../production-line/production-line.module";
import { ProductionEfficiencyChartComponent } from './component/production-efficiency-chart/production-efficiency-chart.component';
import {NgChartsModule} from "ng2-charts";
import { WeightCorrectnessChartComponent } from './component/weight-correctnes-chart/weight-correctness-chart.component';


@NgModule({
  declarations: [
    ReportListPageComponent,
    ReportListComponent,
    DateFilterFormComponent,
    ReportDetailsPageComponent,
    ReportDetailsComponent,
    ProductionEfficiencyChartComponent,
    WeightCorrectnessChartComponent
  ],
    imports: [
        CommonModule, SharedModule, ProductionLineModule, NgChartsModule
    ]
})
export class ReportModule {
}
