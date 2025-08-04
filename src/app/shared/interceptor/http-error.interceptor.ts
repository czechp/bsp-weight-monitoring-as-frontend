import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {StatementService} from "../service/statement.service";
import {Router} from "@angular/router";

type ErrorBodyResponse = {
  details: string;
  type: string;
  message: string;
  timestamp: string
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private statementService: StatementService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => error);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400 || error.status === 404) {
      const errorBody: ErrorBodyResponse = error.error;
      this.statementService.showError(errorBody.details);
    } else if (error.status === 401) {
      this.statementService.showError("Incorrect email or password or your account is not active");
      this.router.navigate(['login']);
    } else if (error.status === 403)
      this.router.navigate(['forbidden']);

  }
}
