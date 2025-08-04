import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ControllerModel, ControllerState, controllerTypeToString} from "../../model/controller.model";
import {ElementState} from "../../../shared/directive/element-state.directive";

@Component({
  selector: 'app-controller-tile',
  templateUrl: './controller-tile.component.html',
  styleUrls: ['./controller-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerTileComponent implements OnInit {
  @Input() controller!: ControllerModel;
  controllerType: string = "";
  state: ElementState = ElementState.DISABLED;

  ngOnInit(): void {
    this.controllerType = controllerTypeToString(this.controller.type);
    if (this.controller.state === ControllerState.AVAILABLE)
      this.state = ElementState.OK;
    else if (this.controller.state === ControllerState.UNAVAILABLE)
      this.state = ElementState.NOK;

    if (!this.controller.activation)
      this.state = ElementState.DISABLED;
  }
}
