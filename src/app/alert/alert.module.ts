import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './page/alerts-page/alerts-page.component';
import {SharedModule} from "../shared/shared.module";
import {ReportModule} from "../report/report.module";
import { AlertsTableComponent } from './component/alerts-table/alerts-table.component';
import { AlertTypePipe } from './pipe/alert-type.pipe';
import { ProductUtilizationWayPipe } from './pipe/product-utilization-way.pipe';



@NgModule({
  declarations: [
    AlertsPageComponent,
    AlertsTableComponent,
    AlertTypePipe,
    ProductUtilizationWayPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportModule
  ]
})
export class AlertModule { }
