import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {SettingsPageComponent} from './page/settings-page/settings-page.component';
import {SettingsStatisticsPageComponent} from './page/settings-statistics-page/settings-statistics-page.component';
import {ConfigurationPageComponent} from './page/configuration-page/configuration-page.component';


@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsStatisticsPageComponent,
    ConfigurationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SettingsPageComponent, SettingsStatisticsPageComponent]
})
export class SettingsModule {
}
