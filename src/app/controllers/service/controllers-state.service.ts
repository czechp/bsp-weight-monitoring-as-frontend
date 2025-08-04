import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription, switchMap, timer} from "rxjs";
import {ControllerModel} from "../model/controller.model";
import {ControllerHttpService} from "./controller-http.service";
import {Router} from "@angular/router";

@Injectable()
export class ControllersStateService implements OnDestroy {
  controllers$ = new BehaviorSubject<ControllerModel[]>([]);
  private readonly REFRESH_TIME_MS = 15000;
  private httpSubscription: Subscription;

  constructor(private httpClient: ControllerHttpService, private router: Router) {
    this.httpSubscription = this.getControllersCyclic();
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }

  private getControllersCyclic() {
    return timer(0, this.REFRESH_TIME_MS)
      .pipe(
        switchMap(() => this.httpClient.getControllers())
      )
      .subscribe(response => this.controllers$.next(response));
  }

  private getControllers() {
    this.httpClient.getControllers()
      .subscribe((controllers: ControllerModel[]) => this.controllers$.next(controllers));
  }

  addController() {
    this.router.navigate(['controller-add']);
  }
}
