import {Injectable} from '@angular/core';
import {UserLoginModel} from "../../users/model/user-login.model";
import {UserInfo, UserRole} from "../../users/model/user-info.model";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo$ = new BehaviorSubject<UserInfo | null>(null);
  private readonly USERNAME_KEY = "USERNAME";
  private readonly EMAIL_KEY = "EMAIL";
  private readonly ROLE_KEY = "ROLE";
  private readonly AUTH_HEADER_KEY = "AUTH_HEADER";

  constructor(private router: Router) {
    this.init();
  }

  login(userInfo: UserInfo, loginModel: UserLoginModel) {
    const token = this.generateAuthToken(loginModel);
    const authorizationHeader = `Basic ${token}`;
    this.storeUserData(authorizationHeader, userInfo.username, userInfo.email, userInfo.role);
    this.userInfo$.next(userInfo);
  }

  logout() {
    this.clearUserData();
    this.router.navigate(['login']);
    this.userInfo$.next(null);
  }

  isLogged(): boolean {
    return localStorage.getItem(this.AUTH_HEADER_KEY) !== null;
  }

  isAdmin() {
    const role = localStorage.getItem(this.ROLE_KEY) as UserRole;
    return role === UserRole.ADMIN;
  }

  isMaintainer() {
    const role = localStorage.getItem(this.ROLE_KEY) as UserRole;
    return role === UserRole.MAINTAINER;
  }

  getAuthToken() {
    return localStorage.getItem(this.AUTH_HEADER_KEY);
  }

  getRole(): UserRole {
    const roleString = localStorage.getItem(this.ROLE_KEY) as string;
    return UserRole[roleString as keyof typeof UserRole];
  }

  private generateAuthToken(loginModel: UserLoginModel) {
    return btoa(`${loginModel.username}:${loginModel.password}`);
  }

  private storeUserData(authorizationHeader: string, username: string, email: string, role: string) {
    localStorage.setItem(this.USERNAME_KEY, username);
    localStorage.setItem(this.EMAIL_KEY, email);
    localStorage.setItem(this.ROLE_KEY, role);
    localStorage.setItem(this.AUTH_HEADER_KEY, authorizationHeader);
  }

  private clearUserData() {
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem(this.EMAIL_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    localStorage.removeItem(this.AUTH_HEADER_KEY);
  }

  private init() {
    if (this.isLogged()) {
      const userInfo = this.loadUserData();
      this.userInfo$.next(userInfo);
    }
  }

  private loadUserData(): UserInfo {
    return {
      username: localStorage.getItem(this.USERNAME_KEY) as string,
      role: localStorage.getItem(this.ROLE_KEY) as UserRole,
      email: localStorage.getItem(this.EMAIL_KEY) as string,
    }
  }
}
