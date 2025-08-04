import { Component } from '@angular/core';
import {ControllerCreateStateService} from "../../service/controller-create-state.service";

@Component({
  selector: 'app-controller-create-page',
  templateUrl: './controller-create-page.component.html',
  styleUrls: ['./controller-create-page.component.scss'],
  providers: [ControllerCreateStateService]
})
export class ControllerCreatePageComponent {
  createForm$ = this.stateService.createForm$;

  constructor(private stateService: ControllerCreateStateService){}

  createController() {
    this.stateService.createController();
  }

  checkAvailability() {
    this.stateService.checkAvailability();
  }
}
