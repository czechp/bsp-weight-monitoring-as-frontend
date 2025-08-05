import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./users/page/login-page/login-page.component";
import {RegisterPageComponent} from "./users/page/register-page/register-page.component";
import {ConfirmEmailPageComponent} from "./users/page/confirm-email-page/confirm-email-page.component";
import {SettingsPageComponent} from "./settings/page/settings-page/settings-page.component";
import {UsersListPageComponent} from "./users/page/users-list-page/users-list-page.component";
import {UserManagementPageComponent} from "./users/page/user-managment-page/user-management-page.component";
import {loginGuard} from "./shared/guard/login.guard";
import {ForbiddenPageComponent} from "./shared/page/forbidden-page/forbidden-page.component";
import {adminGuard} from "./shared/guard/admin.guard";
import {
  UserRestorePasswordPageComponent
} from "./users/page/user-restore-password-page/user-restore-password-page.component";
import {UserSetNewPwdComponent} from "./users/page/user-set-new-pwd/user-set-new-pwd.component";
import {maintainerGuard} from "./shared/guard/maintainer.guard";
import {
  SettingsStatisticsPageComponent
} from "./settings/page/settings-statistics-page/settings-statistics-page.component";
import {ConfigurationPageComponent} from "./settings/page/configuration-page/configuration-page.component";
import {ControllersListPageComponent} from "./controllers/page/controllers-list-page/controllers-list-page.component";
import {
  ControllerCreatePageComponent
} from "./controllers/page/controller-create-page/controller-create-page.component";
import {
  ControllerDetailsPageComponent
} from "./controllers/page/controller-details-page/controller-details-page.component";
import {
  ControllerDetailsActionsPageComponent
} from "./controllers/page/controller-details-actions-page/controller-details-actions-page.component";
import {ProcessValuesPageComponent} from "./proces-values/page/process-values-page/process-values-page.component";
import {
  ProcessValueCreatePageComponent
} from "./proces-values/page/process-value-create-page/process-value-create-page.component";
import {
  ProcessValueDetailsPageComponent
} from "./proces-values/page/process-value-details-page/process-value-details-page.component";
import {DashboardsPageComponent} from "./dashboards/page/dashboards-page/dashboards-page.component";
import {DashboardDetailsPageComponent} from "./dashboards/page/dashboard-details-page/dashboard-details-page.component";
import {DashboardCreatePageComponent} from "./dashboards/page/dashboard-create-page/dashboard-create-page.component";
import {DashboardEditPageComponent} from "./dashboards/page/dashboard-edit-page/dashboard-edit-page.component";
import {DashboardDeletePageComponent} from "./dashboards/page/dashboard-delete-page/dashboard-delete-page.component";
import {
  ProductionLineListPageComponent
} from "./production-line/page/production-line-list-page/production-line-list-page.component";
import {
  ProductionLinesSettingsPageComponent
} from "./production-line/page/production-lines-settings-page/production-lines-settings-page.component";
import {
  ProductionLineAddPageComponent
} from "./production-line/page/production-line-add-page/production-line-add-page.component";
import {
  ProductionLineModifyPageComponent
} from "./production-line/page/production-line-modify-page/production-line-modify-page.component";
import {
  ProductionLineMeasurementsListComponent
} from "./production-line/page/production-line-measurements-list-page/production-line-measurements-list.component";
import {ReportListPageComponent} from "./report/page/report-list-page/report-list-page.component";
import {ReportDetailsPageComponent} from "./report/page/report-details-page/report-details-page.component";

const routes: Routes = [
    {path: "", component: ProductionLineListPageComponent, canActivate: [loginGuard]},
    {path: 'forbidden', component: ForbiddenPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'restore-password', component: UserRestorePasswordPageComponent},
    {path: 'set-new-password', component: UserSetNewPwdComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'confirm-email', component: ConfirmEmailPageComponent},
    {path: 'controllers', component: ControllersListPageComponent, canActivate: [loginGuard]},
    {path: 'controller-add', component: ControllerCreatePageComponent, canActivate: [loginGuard, maintainerGuard]},
    {
      path: 'settings', component: SettingsPageComponent, canActivate: [loginGuard], children: [
        {path: 'users', component: UsersListPageComponent, canActivate: [adminGuard]},
        {path: 'statistics', component: SettingsStatisticsPageComponent},
        {path: 'configuration', component: ConfigurationPageComponent, canActivate: [maintainerGuard]},
        {path: 'user-management/:id', component: UserManagementPageComponent, canActivate: [adminGuard]}
      ],
    },
    {
      path: "controller-details/:id",
      component: ControllerDetailsPageComponent,
      canActivate: [loginGuard, maintainerGuard],
      children: [
        {path: "details", component: ControllerDetailsActionsPageComponent},
        {path: "process-values", component: ProcessValuesPageComponent},
        {path: "process-value-create", component: ProcessValueCreatePageComponent},
      ]
    },
    {
      path: "process-value-details/:id",
      component: ProcessValueDetailsPageComponent,
      canActivate: [loginGuard, maintainerGuard],
    },
    {
      path: "dashboards",
      component: DashboardsPageComponent,
      canActivate: [loginGuard],
    },
    {
      path: "dashboard-details/:id",
      component: DashboardDetailsPageComponent,
      canActivate: [loginGuard],
    },
    {
      path: "dashboard-create",
      component: DashboardCreatePageComponent,
      canActivate: [loginGuard, maintainerGuard]
    },
    {
      path: "dashboard-edit/:id",
      component: DashboardEditPageComponent,
      canActivate: [loginGuard, maintainerGuard],
      children: [
        {path: "delete", component: DashboardDeletePageComponent, canActivate: [loginGuard, maintainerGuard]},
      ]
    },
    {
      path: "production-lines",
      component: ProductionLineListPageComponent,
      canActivate: [loginGuard],
    },
    {
      path: "production-lines-measurements",
      component: ProductionLineMeasurementsListComponent,
      canActivate: [loginGuard],
    },
    {
      path: "production-lines-settings",
      component: ProductionLinesSettingsPageComponent,
      canActivate: [loginGuard, maintainerGuard],
      children: [
        {
          path: "production-line-add",
          component: ProductionLineAddPageComponent,
          canActivate: [loginGuard, maintainerGuard]
        },
        {
          path: "production-line-modify",
          component: ProductionLineModifyPageComponent,
          canActivate: [loginGuard, maintainerGuard]
        }
      ]
    },
    {
      path: "reports",
      component: ReportListPageComponent,
      canActivate: [loginGuard]
    },
    {
      path: "report-details/:id",
      component: ReportDetailsPageComponent,
      canActivate: [loginGuard]
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
