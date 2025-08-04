import { Component } from '@angular/core';
import {ProcessValuesStateService} from "../../service/process-values-state.service";

@Component({
  selector: 'app-process-values-page',
  templateUrl: './process-values-page.component.html',
  styleUrls: ['./process-values-page.component.scss'],
  providers: [ProcessValuesStateService]
})
export class ProcessValuesPageComponent {
  processValues$ = this.stateService.processValues$;

  constructor(private stateService: ProcessValuesStateService) {
  }

  goToCreateProcessValue() {
    this.stateService.goToCreateProcessValue();
  }

  goToDetails(processValueId: number) {
    this.stateService.goToProcessValueDetails(processValueId);
  }
}
