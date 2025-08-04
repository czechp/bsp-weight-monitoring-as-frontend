import {Component, Input} from '@angular/core';
import {InfoRow, InfoRowState} from "../../type/info-row.type";



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required: true})
  title!: string;
  @Input()
  rows: InfoRow[] = [];

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
