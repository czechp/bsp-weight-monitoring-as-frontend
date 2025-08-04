import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class DashboardDetailsStateService {
  private dashboardId = this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  navigateToEdit() {
    this.router.navigate(['dashboard-edit', this.dashboardId]);
  }
}
