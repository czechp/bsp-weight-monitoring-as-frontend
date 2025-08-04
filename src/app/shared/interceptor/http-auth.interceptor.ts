import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authorizationHash = this.authenticationService.getAuthToken();
    if (authorizationHash) {

      const httpRequest = request.clone({
          headers: request.headers.append("Authorization", `${authorizationHash}`)
        }
      );
      return next.handle(httpRequest);
    }
    return next.handle(request);
  }
}
