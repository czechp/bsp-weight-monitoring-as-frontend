import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {LogoComponent} from './components/logo/logo.component';
import {TopBarTilesComponent} from './components/top-bar-tiles/top-bar-tiles.component';
import {SharedModule} from "../shared/shared.module";
import {TopBarTileComponent} from './components/top-bar-tile/top-bar-tile.component';
import {UserTileComponent} from './components/user-tile/user-tile.component';

@NgModule({
  declarations: [
    TopBarComponent,
    LogoComponent,
    TopBarTilesComponent,
    TopBarTileComponent,
    UserTileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TopBarComponent,
    LogoComponent,
    UserTileComponent
  ]
})
export class LayoutModule {

}
