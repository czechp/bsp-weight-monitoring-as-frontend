import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { ProductionLineListPageComponent } from './page/production-line-list-page/production-line-list-page.component';
import { ProductionLineListComponent } from './component/production-line-list/production-line-list.component';
import {ProductionLineTileComponent} from "./component/production-line-tile/production-line-tile.component";
import { MeasurementTileComponent } from './component/measurment-tile/measurement-tile.component';
import { ProductionLinesSettingsPageComponent } from './page/production-lines-settings-page/production-lines-settings-page.component';
import { ProductionLineAddPageComponent } from './page/production-line-add-page/production-line-add-page.component';
import { ProductionLineFormComponent } from './component/production-line-form/production-line-form.component';
import { ProductionLineModifyPageComponent } from './page/production-line-modify-page/production-line-modify-page.component';
import { ProductionLinesTileListComponent } from './component/production-lines-tile-list/production-lines-tile-list.component';
import { ProductionLineModifyComponent } from './component/production-line-modify/production-line-modify.component';
import { ProductionLineMeasurementsListComponent } from './page/production-line-measurements-list-page/production-line-measurements-list.component';
import { ProductionLineViewSelectorComponent } from './component/production-line-view-selector/production-line-view-selector.component';
import { ProductionLineMeasurementsTableComponent } from './component/production-line-measurements-table/production-line-measurements-table.component';



@NgModule({
  declarations: [
    ProductionLineListPageComponent,
    ProductionLineListComponent,
    ProductionLineTileComponent,
    MeasurementTileComponent,
    ProductionLinesSettingsPageComponent,
    ProductionLineAddPageComponent,
    ProductionLineFormComponent,
    ProductionLineModifyPageComponent,
    ProductionLinesTileListComponent,
    ProductionLineModifyComponent,
    ProductionLineMeasurementsListComponent,
    ProductionLineViewSelectorComponent,
    ProductionLineMeasurementsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductionLineModule { }
