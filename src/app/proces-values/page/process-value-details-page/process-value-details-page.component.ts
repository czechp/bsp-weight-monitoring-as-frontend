import {Component} from '@angular/core';
import {ProcessValueDetailsStateService} from "../../service/process-value-details-state.service";


@Component({
  selector: 'app-process-value-details-page',
  templateUrl: './process-value-details-page.component.html',
  styleUrls: ['./process-value-details-page.component.scss'],
  providers: [ProcessValueDetailsStateService]
})
export class ProcessValueDetailsPageComponent {
  processValueInfo$ = this.stateService.processValueInfo$;
  processValueUpdateForm$ = this.stateService.processValueUpdateForm$;

  constructor(private stateService: ProcessValueDetailsStateService) {
  }

  deleteProcessValue() {
    this.stateService.deleteProcessValue();
  }

  updateProcessValue() {
    this.stateService.updateProcessValue();
  }
}
