import {Injectable} from '@angular/core';
import {DashboardCreateForm, DashboardFormHandler} from "../model/dashboard.form";
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {IconItemService} from "../../shared/service/icon-item.service";
import {IconItem} from "../../shared/type/icon-item.type";
import {DashboardsHttpService} from "./dashboards-http.service";
import {StatementService} from "../../shared/service/statement.service";
import {Router} from "@angular/router";

@Injectable()
export class DashboardCreateStateService {
  icons = new BehaviorSubject<IconItem[]>([]);
  private formHandler = new DashboardFormHandler();
  private createDashboardForm = this.formHandler.emptyCreateDashboardForm();
  createDashboardForm$ = new BehaviorSubject<FormGroup<DashboardCreateForm>>(this.createDashboardForm);

  constructor(private iconsService: IconItemService, private httpService: DashboardsHttpService, private statementService: StatementService, private router: Router) {
    this.iconsService.getIcons().subscribe(icons => {
      if (icons && icons.length > 0)
        this.createDashboardForm.get('icon')?.setValue(icons[0].icon);
      this.icons.next(icons);
    })
  }

  createDashboard() {
    this.createDashboardForm.markAllAsTouched();
    if (this.createDashboardForm.invalid)
      return;
    const dashboardCreateModel = this.formHandler.createDashboardModel(this.createDashboardForm);
    this.httpService.createDashboard(dashboardCreateModel).subscribe({
      next: () => {
        this.statementService.showSuccess("Dashboard został utworzony");
        this.router.navigate(["/dashboards"]);
      }
    });

  }
}
