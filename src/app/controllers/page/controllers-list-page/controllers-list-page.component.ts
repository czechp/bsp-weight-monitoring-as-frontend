import {Component} from '@angular/core';
import {ControllersStateService} from "../../service/controllers-state.service";
import {UserRole} from "../../../users/model/user-info.model";

@Component({
  selector: 'app-controllers-list-page',
  templateUrl: './controllers-list-page.component.html',
  styleUrls: ['./controllers-list-page.component.scss'],
  providers: [ControllersStateService]
})
export class ControllersListPageComponent {
  controllers$ = this.stateService.controllers$;
  protected readonly UserRole = UserRole;

  constructor(private stateService: ControllersStateService,) {
  }

  addController() {
    this.stateService.addController();
  }
}
