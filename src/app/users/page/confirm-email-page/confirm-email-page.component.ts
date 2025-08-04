import {Component} from '@angular/core';
import {ConfirmEmailStateService} from "../../service/confirm-email-state.service";

@Component({
  selector: 'app-confirm-email-page',
  templateUrl: './confirm-email-page.component.html',
  styleUrls: ['./confirm-email-page.component.scss'],
  providers: [ConfirmEmailStateService]
})
export class ConfirmEmailPageComponent {
  confirmEmailForm$ = this.confirmEmailStateService.confirmEmailForm$;

  constructor(private confirmEmailStateService: ConfirmEmailStateService) {
  }

  confirmEmail() {
    this.confirmEmailStateService.confirmEmail();
  }
}
