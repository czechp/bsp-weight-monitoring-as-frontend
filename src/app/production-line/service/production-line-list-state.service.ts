import {Injectable, OnDestroy} from '@angular/core';
import {ProductionLineHttpService} from "./production-line-http.service";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {ProductionLineModel} from "../model/production-line.model";

@Injectable()
export class ProductionLineListStateService implements OnDestroy{
  productionLines$ = new BehaviorSubject<ProductionLineModel[]>([])
  private getProductionLinesSubscription: Subscription;
  private readonly REFRESH_INTERVAL = 10000;

  constructor(private httpClient: ProductionLineHttpService) {
    this.getProductionLines();
    this.getProductionLinesSubscription = this.getProductionLinesSubscription = interval(this.REFRESH_INTERVAL).subscribe(() => {
      this.getProductionLines();
    })
  }

  getProductionLines() {
    this.httpClient.getProductionLines().subscribe((productionLines: ProductionLineModel[]) => {
      this.productionLines$.next(productionLines);
    });
  }

  ngOnDestroy(): void {
    this.getProductionLinesSubscription.unsubscribe();
  }
}
