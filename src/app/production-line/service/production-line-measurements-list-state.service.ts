import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {ProductionLineModel} from "../model/production-line.model";
import {ProductionLineHttpService} from "./production-line-http.service";

@Injectable()
export class ProductionLineMeasurementsListStateService implements OnDestroy {
  productionLines$ = new BehaviorSubject<ProductionLineModel[]>([]);
  subscription: Subscription;
  private readonly REFRESH_INTERVAL = 10000;

  constructor(private httpService: ProductionLineHttpService) {
    this.getProductionLines();
    this.subscription = interval(this.REFRESH_INTERVAL)
      .subscribe(() => this.getProductionLines());
  }


  getProductionLines() {
    this.httpService.getProductionLines()
      .subscribe(lines => this.productionLines$.next(lines));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
