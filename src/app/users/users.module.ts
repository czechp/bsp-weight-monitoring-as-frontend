import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {RegisterPageComponent} from './page/register-page/register-page.component';
import {SharedModule} from "../shared/shared.module";
import {RegisterFormComponent} from './component/register-form/register-form.component';
import {ConfirmEmailPageComponent} from './page/confirm-email-page/confirm-email-page.component';
import {ConfirmEmailFormComponent} from './component/confirm-email-form/confirm-email-form.component';
import {UsersListPageComponent} from './page/users-list-page/users-list-page.component';
import {UsersListComponent} from './component/users-list/users-list.component';
import {UserTileComponent} from './component/user-tile/user-tile.component';
import {UserManagementPageComponent} from './page/user-managment-page/user-management-page.component';
import {ActivateUserFormComponent} from './component/activate-user-form/activate-user-form.component';
import {LoginFormComponent} from './component/login-form/login-form.component';
import {UserChangeRoleFormComponent} from './component/user-change-role-form/user-change-role-form.component';
import {UserRemoveComponent} from './component/user-remove/user-remove.component';
import {UserRestorePasswordPageComponent} from './page/user-restore-password-page/user-restore-password-page.component';
import {
  UserRestorePasswordFormComponent
} from './component/user-restore-password-form/user-restore-password-form.component';
import {UserSetNewPwdComponent} from './page/user-set-new-pwd/user-set-new-pwd.component';
import {UserSetNewPwdFormComponent} from './component/user-set-new-pwd-form/user-set-new-pwd-form.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    ConfirmEmailPageComponent,
    ConfirmEmailFormComponent,
    UsersListPageComponent,
    UsersListComponent,
    UserTileComponent,
    UserManagementPageComponent,
    ActivateUserFormComponent,
    LoginFormComponent,
    UserChangeRoleFormComponent,
    UserRemoveComponent,
    UserRestorePasswordPageComponent,
    UserRestorePasswordFormComponent,
    UserSetNewPwdComponent,
    UserSetNewPwdFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [LoginPageComponent, RegisterPageComponent, UsersListPageComponent, UserManagementPageComponent, UserSetNewPwdComponent]
})
export class UsersModule {
}
