import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegisterModel} from "../model/user-register.model";
import {BACKEND_URL} from "../../shared/configuration/URL";
import {Page} from "../../shared/type/page.type";
import {UserModel} from "../model/user.model";
import {Observable} from "rxjs";
import {UserLoginModel} from "../model/user-login.model";
import {UserInfo} from "../model/user-info.model";
import {UserChangeRoleModel} from "../model/user-change-role.model";
import {UserRestorePasswordModel} from "../model/user-restore-password.model";
import {UserSetPasswordModel} from "../model/user-set-password.model";

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {

  constructor(private http: HttpClient) {
  }

  registerUser(registerModel: UserRegisterModel) {
    return this.http.post(`${BACKEND_URL}/users/register`, registerModel);
  }

  confirmEmail(confirmationToken: string) {
    return this.http.put(`${BACKEND_URL}/users/emails/confirmation/${confirmationToken}`, confirmationToken);
  }

  getAllUsers(): Observable<Page<UserModel>> {
    return this.http.get<Page<UserModel>>(`${BACKEND_URL}/users`);
  }

  getUserById(userId: number) {
    return this.http.get<UserModel>(`${BACKEND_URL}/users/${userId}`);
  }

  activateUser(userId: number, activation: boolean) {
    return this.http.put(`${BACKEND_URL}/users/admin-activation/${userId}`, {}, {params: {activation}});
  }

  loginUser(loginModel: UserLoginModel) {
    return this.http.post<UserInfo>(`${BACKEND_URL}/users/login`, loginModel);
  }

  changeRole(userId: number, userRole: UserChangeRoleModel) {
    return this.http.put(`${BACKEND_URL}/users/role/${userId}`, {}, {params: {userRole: userRole.role}});
  }

  removeUser(userId: number) {
    return this.http.delete(`${BACKEND_URL}/users/${userId}`);
  }

  restorePassword(restoreModel: UserRestorePasswordModel) {
    return this.http.put(`${BACKEND_URL}/users/restore-password-token`, {}, {params: {email: restoreModel.email}});

  }

  setNewPassword(newPasswordModel: UserSetPasswordModel) {
    return this.http.put(`${BACKEND_URL}/users/new-password`, newPasswordModel);
  }
}
