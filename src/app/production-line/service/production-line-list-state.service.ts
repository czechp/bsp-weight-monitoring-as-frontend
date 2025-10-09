import {Injectable, OnDestroy} from '@angular/core';
import {ProductionLineHttpService} from "./production-line-http.service";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {ProductionLineModel} from "../model/production-line.model";
import {Router} from "@angular/router";
import {MeasurementHistoryNavigation} from "../component/production-line-tile/production-line-tile.component";

@Injectable()
export class ProductionLineListStateService implements OnDestroy{
  productionLines$ = new BehaviorSubject<ProductionLineModel[]>([])
  private getProductionLinesSubscription: Subscription;
  private readonly REFRESH_INTERVAL = 10000;

  constructor(private httpClient: ProductionLineHttpService, private router: Router) {
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

  navigateToAlerts(productionLine: ProductionLineModel) {
    this.router.navigate(['/alerts'], { queryParams: { lineName: productionLine.name} });
  }

  navigateToHistory(measurementHistoryNavigation: MeasurementHistoryNavigation) {
    this.router.navigate(['/historical-measurements', measurementHistoryNavigation.lineName, measurementHistoryNavigation.dosingNr]);
  }
}
