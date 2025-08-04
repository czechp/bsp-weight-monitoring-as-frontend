import {Component, Input} from '@angular/core';
import {InfoRow, InfoRowState} from "../../type/info-row.type";

@Component({
  selector: 'app-page-with-info',
  templateUrl: './page-with-info.component.html',
  styleUrls: ['./page-with-info.component.scss']
})
export class PageWithInfoComponent {
  @Input({required: true}) info: InfoRow[] = []
  @Input()
  title: string | null = null;

  getStateClass(state?: InfoRowState): string {
    switch (state) {
      case InfoRowState.OK:
        return 'state-ok';
      case InfoRowState.NOK:
        return 'state-nok';
      default:
        return '';
    }
  }
}
