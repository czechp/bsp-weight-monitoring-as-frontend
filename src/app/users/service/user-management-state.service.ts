import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../model/user.model";
import {BehaviorSubject} from "rxjs";
import {UsersHttpService} from "./users-http.service";
import {booleanToString} from "../../shared/service/utils";
import {StatementService} from "../../shared/service/statement.service";
import {createUserChangeRoleForm, UserChangeRoleForm, UserChangeRoleModel} from "../model/user-change-role.model";
import {FormGroup} from "@angular/forms";
import {InfoRow} from "../../shared/type/info-row.type";

@Injectable()
export class UserManagementStateService {
  user$ = new BehaviorSubject<UserModel | null>(null);
  userInfo$ = new BehaviorSubject<InfoRow[]>([]);
  userChangeRoleForm$ = new BehaviorSubject<FormGroup<UserChangeRoleForm> | null>(null);
  private userChangeRoleForm: FormGroup<UserChangeRoleForm> | null = null;
  private readonly userId: number;

  constructor(private route: ActivatedRoute, private httpClient: UsersHttpService, private statementService: StatementService, private router: Router) {
    this.userId = (this.route.snapshot.paramMap.get("id") || 0) as number;
    this.getUser();
  }

  userActivation(activation: boolean) {
    this.httpClient.activateUser(this.userId, activation).subscribe(() => {
      this.statementService.showSuccess(`Konto użytkownika ${activation ? "włączone" : "wyłączone"}`);
      this.getUser()
    });
  }

  changeRole() {
    this.userChangeRoleForm?.markAllAsTouched();
    const userRole = this.userChangeRoleForm?.value as UserChangeRoleModel;
    this.httpClient.changeRole(this.userId, userRole).subscribe(() => {
      this.statementService.showSuccess(`Rola została zmieniona`);
      this.getUser();
    })
  }

  removeUser() {
    this.httpClient.removeUser(this.userId).subscribe(() => {
      this.statementService.showSuccess(`Użytkownik usunięty`);
      this.router.navigate(["settings", "users"]);
    })
  }

  private getUser() {
    this.httpClient.getUserById(this.userId).subscribe(response => {
      this.prepareInfo(response);
      this.user$.next(response);
      this.handleChangeRoleForm(response);
    });
  }

  private prepareInfo(user: UserModel) {
    const userInfo: InfoRow [] = [
      {key: "Email", value: user.email},
      {key: "Potwierdzenie email", value: booleanToString(user.emailConfirmed)},
      {key: "Akceptacja admina", value: booleanToString(user.adminActivation)},
      {key: "Rola", value: user.role},
    ];
    this.userInfo$.next(userInfo);
  }

  private handleChangeRoleForm(user: UserModel) {
    this.userChangeRoleForm = createUserChangeRoleForm(user.role);
    this.userChangeRoleForm$.next(this.userChangeRoleForm);
  }
}
