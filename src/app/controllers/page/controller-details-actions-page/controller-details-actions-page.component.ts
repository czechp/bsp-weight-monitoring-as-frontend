import { Component } from '@angular/core';
import {ControllerDetailsActionsStateService} from "../../service/controller-details-actions-state.service";
import {DialogService} from "../../../shared/service/dialog.service";

@Component({
  selector: 'app-controller-details-actions-page',
  templateUrl: './controller-details-actions-page.component.html',
  styleUrls: ['./controller-details-actions-page.component.scss'],
  providers: [ControllerDetailsActionsStateService]
})
export class ControllerDetailsActionsPageComponent {
  controllerInfo$ = this.stateService.controllerInfo$;
  controllerUpdateForm$ = this.stateService.controllerUpdateForm$;
  controllerModel$ = this.stateService.controllerModel$;

  constructor(private stateService: ControllerDetailsActionsStateService) {
  }

  updateController() {
    this.stateService.updateController();
  }

  checkAvailability() {
    this.stateService.checkAvailability();
  }

  removeController() {
    this.stateService.removeController();
  }

  changeActivation() {
    this.stateService.changeActivation();
  }
}
