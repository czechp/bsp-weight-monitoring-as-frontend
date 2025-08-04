import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsPageComponent } from './page/dashboards-page/dashboards-page.component';
import {SharedModule} from "../shared/shared.module";
import { DashboardsListComponent } from './component/dashboards-list/dashboards-list.component';
import { DashboardTileComponent } from './component/dashboard-tile/dashboard-tile.component';
import { DashboardDetailsPageComponent } from './page/dashboard-details-page/dashboard-details-page.component';
import { DashboardCreatePageComponent } from './page/dashboard-create-page/dashboard-create-page.component';
import { DashboardFormComponent } from './component/dashboard-form/dashboard-form.component';
import { DashboardEditPageComponent } from './page/dashboard-edit-page/dashboard-edit-page.component';
import { DashboardDeletePageComponent } from './page/dashboard-delete-page/dashboard-delete-page.component';
import { DashboardItemTileComponent } from './component/dashboard-item-tile/dashboard-item-tile.component';



@NgModule({
    declarations: [
        DashboardsPageComponent,
        DashboardsListComponent,
        DashboardTileComponent,
        DashboardDetailsPageComponent,
        DashboardCreatePageComponent,
        DashboardFormComponent,
        DashboardEditPageComponent,
        DashboardDeletePageComponent,
        DashboardItemTileComponent,
    ],
    exports: [
        DashboardItemTileComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class DashboardsModule { }
