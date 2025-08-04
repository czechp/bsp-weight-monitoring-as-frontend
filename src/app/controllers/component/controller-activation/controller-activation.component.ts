import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ControllerModel} from "../../model/controller.model";

@Component({
  selector: 'app-controller-activation',
  templateUrl: './controller-activation.component.html',
  styleUrls: ['./controller-activation.component.scss']
})
export class ControllerActivationComponent {
  @Output() changeActivation = new EventEmitter<void>();
  label = "Aktywuj";
  stateClass = "button-success";

  @Input() set controllerModel(value: ControllerModel) {
    this.label = value.activation ? "Dezaktywuj" : "Aktywuj";
    this.stateClass = value.activation ? "button-nok" : "button-success";
  }

  changeActivationOnClick() {
    this.changeActivation.emit();
  }
}
