import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";

export const adminGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  if (!authenticationService.isAdmin()) {
    router.navigate(['forbidden']);
    return false;
  }
  return true;
};
