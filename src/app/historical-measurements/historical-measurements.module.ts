import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HistoricalMeasurementsChartComponent } from './component/historical-measurements-chart/historical-measurements-chart.component';
import {NgChartsModule} from "ng2-charts";
import { HistoricalMeasurementsLinePageComponent } from './page/historical-measurements-line-page/historical-measurements-line-page.component';
import { HistoricalMeasurementsDateSelectorComponent } from './component/historical-measurements-date-selector/historical-measurements-date-selector.component';
import { HistoricalMeasurementsWrapperComponent } from './component/historical-measurements-wrapper/historical-measurements-wrapper.component';



@NgModule({
    declarations: [
        HistoricalMeasurementsChartComponent,
        HistoricalMeasurementsLinePageComponent,
        HistoricalMeasurementsDateSelectorComponent,
        HistoricalMeasurementsWrapperComponent
    ],
    exports: [
        HistoricalMeasurementsChartComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NgChartsModule
    ]
})
export class HistoricalMeasurementsModule { }
