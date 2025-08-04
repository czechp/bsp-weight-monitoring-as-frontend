import {Component, Input} from '@angular/core';
import {ElementState} from "../../directive/element-state.directive";
import {IconName} from "@fortawesome/free-regular-svg-icons";

export type TileRow = {
  key: string;
  value: string;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input()
  state: ElementState = ElementState.NOK;
  @Input()
  title!: string;
  @Input()
  subtitle!: string;
  @Input()
  secondSubtitle!: string;
  @Input()
  iconName!: IconName;
  @Input()
  infoRows: TileRow[] = [];
}
