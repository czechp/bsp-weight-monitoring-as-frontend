import {Injectable, OnDestroy} from '@angular/core';
import {ProcessValueModel} from "../model/process-value.model";
import {BehaviorSubject, Subscription, switchMap, timer} from "rxjs";
import {ProcessValueHttpService} from "./process-value-http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class ProcessValuesStateService implements OnDestroy{
  private readonly REFRESH_TIME = 10000;
  processValues$ = new BehaviorSubject<ProcessValueModel[]>([]);
  controllerId: number;
  private timerSubscription!: Subscription;

  constructor(private httpService: ProcessValueHttpService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.controllerId = activatedRoute.parent?.snapshot.params['id'];
    this.getProcessValues();

  }

  private getProcessValues() {
    this.timerSubscription = timer(0, this.REFRESH_TIME).pipe(
      switchMap(() => this.httpService.getProcessValues(this.controllerId))
    )
      .subscribe((data: ProcessValueModel[]) => this.processValues$.next(data))
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }


  goToCreateProcessValue() {
    this.router.navigate(['process-value-create'], {relativeTo: this.activatedRoute.parent});
  }

  goToProcessValueDetails(processValueId: number) {
    this.router.navigate(['process-value-details', processValueId]);
  }
}
