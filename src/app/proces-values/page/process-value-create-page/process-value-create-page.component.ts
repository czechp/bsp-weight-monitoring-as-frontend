import { Component } from '@angular/core';
import {ProcessValueCreateStateService} from "../../service/process-value-create-state.service";

@Component({
  selector: 'app-process-value-create-page',
  templateUrl: './process-value-create-page.component.html',
  styleUrls: ['./process-value-create-page.component.scss'],
  providers: [ProcessValueCreateStateService]
})
export class ProcessValueCreatePageComponent {
  processValueCreateForm$ = this.stateService.processValueCreateForm$;
  constructor(private stateService: ProcessValueCreateStateService) {
  }

  createProcessValue() {
    this.stateService.createProcessValue();
  }
}
