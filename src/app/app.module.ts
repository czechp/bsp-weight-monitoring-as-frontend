import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import {UsersModule} from "./users/users.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpErrorInterceptor} from "./shared/interceptor/http-error.interceptor";
import {SettingsModule} from "./settings/settings.module";
import {HttpAuthInterceptor} from "./shared/interceptor/http-auth.interceptor";
import {ControllersModule} from "./controllers/controllers.module";
import {ProcessValueModule} from "./proces-values/process-value.module";
import {DashboardsModule} from "./dashboards/dashboards.module";
import {ProductionLineModule} from "./production-line/production-line.module";
import {ReportModule} from "./report/report.module";

@NgModule({
  declarations: [AppComponent,],
  imports: [DashboardsModule, LayoutModule, UsersModule, SettingsModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, ControllersModule, ProcessValueModule, ProductionLineModule, ReportModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
