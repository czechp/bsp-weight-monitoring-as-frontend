import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ControllersListPageComponent } from './page/controllers-list-page/controllers-list-page.component';
import {SharedModule} from "../shared/shared.module";
import { ControllersListComponent } from './component/controllers-list/controllers-list.component';
import { ControllerTileComponent } from './component/controller-tile/controller-tile.component';
import { ControllerCreatePageComponent } from './page/controller-create-page/controller-create-page.component';
import { ControllerFormComponent } from './component/controller-form/controller-form.component';
import { ControllerDetailsPageComponent } from './page/controller-details-page/controller-details-page.component';
import { ControllerDetailsActionsPageComponent } from './page/controller-details-actions-page/controller-details-actions-page.component';
import { ControllerRemoveComponent } from './component/controller-remove/controller-remove.component';
import { ControllerActivationComponent } from './component/controller-activation/controller-activation.component';


@NgModule({
  declarations: [
    ControllersListPageComponent,
    ControllersListComponent,
    ControllerTileComponent,
    ControllerCreatePageComponent,
    ControllerFormComponent,
    ControllerDetailsPageComponent,
    ControllerDetailsActionsPageComponent,
    ControllerRemoveComponent,
    ControllerActivationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ControllersModule {
}
