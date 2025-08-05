import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportListPageComponent} from './page/report-list-page/report-list-page.component';
import {ReportListComponent} from './component/report-list/report-list.component';
import {SharedModule} from "../shared/shared.module";
import { ReportFilterFormComponent } from './component/report-filter-form/report-filter-form.component';
import { ReportDetailsPageComponent } from './page/report-details-page/report-details-page.component';
import { ReportDetailsComponent } from './component/report-details/report-details.component';
import {ProductionLineModule} from "../production-line/production-line.module";


@NgModule({
  declarations: [
    ReportListPageComponent,
    ReportListComponent,
    ReportFilterFormComponent,
    ReportDetailsPageComponent,
    ReportDetailsComponent
  ],
    imports: [
        CommonModule, SharedModule, ProductionLineModule
    ]
})
export class ReportModule {
}
