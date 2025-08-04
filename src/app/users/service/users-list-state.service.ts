import {Injectable} from '@angular/core';
import {UsersHttpService} from "./users-http.service";
import {BehaviorSubject, map} from "rxjs";
import {UserModel} from "../model/user.model";
import {Router} from "@angular/router";

@Injectable()
export class UsersListStateService {
  users$ = new BehaviorSubject<UserModel[]>([]);

  constructor(private usersHttpService: UsersHttpService, private router: Router) {
    this.getAllUsers()
      .subscribe(users => this.users$.next(users));
  }

  getAllUsers() {
    return this.usersHttpService.getAllUsers()
      .pipe(
        map(response => response.content)
      )
  }

  navigateToUserDetails(user: UserModel) {
    this.router.navigate(["settings", "user-management", user.id])
  }
}
