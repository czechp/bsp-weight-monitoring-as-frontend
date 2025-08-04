import {Injectable, OnDestroy} from '@angular/core';
import {DashboardsHttpService} from "./dashboards-http.service";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {DashboardModel} from "../model/dashboard.model";
import {Router} from "@angular/router";

@Injectable()
export class DashboardsStateService implements OnDestroy{
    dashboards$ = new BehaviorSubject<DashboardModel[]>([]);
    private readonly REFRESH_INTERVAL = 15000;
    private readSubscription: Subscription;

    constructor(private httpService: DashboardsHttpService, private router: Router) {
        this.getDashboards();
        this.readSubscription = interval(this.REFRESH_INTERVAL)
            .subscribe(() => this.getDashboards());
    }

    navigateToDetails(id: number) {
        this.router.navigate([`/dashboard-details/${id}`]);
    }

    navigateToCreate() {
        this.router.navigate(['/dashboard-create']);
    }

    private getDashboards() {
        this.httpService.getDashboards()
            .subscribe((dashboards: DashboardModel[]) => {
                this.dashboards$.next(dashboards);
            });
    }

    ngOnDestroy(): void {
        this.readSubscription.unsubscribe();
    }
}
