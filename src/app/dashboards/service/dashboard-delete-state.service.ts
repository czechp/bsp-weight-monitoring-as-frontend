import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DashboardsHttpService} from "./dashboards-http.service";
import {StatementService} from "../../shared/service/statement.service";
import {DashboardRemoveModel} from "../model/dashboard.model";

@Injectable()
export class DashboardDeleteStateService {
  private dashboardId = this.activatedRoute.parent?.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private httpService: DashboardsHttpService, private router: Router, private statementService: StatementService) {
  }

  removeDashboard() {
    const removeModel : DashboardRemoveModel = {id: this.dashboardId};
    this.httpService.removeDashboard(removeModel).subscribe(() => {
      this.statementService.showSuccess("Dashboard został usunięty");
      this.router.navigate(['/dashboards']);
    });
  }
}
