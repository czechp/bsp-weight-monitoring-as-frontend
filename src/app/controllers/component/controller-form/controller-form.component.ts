import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ControllerForm} from "../../model/controller-create.model";

@Component({
  selector: 'app-controller-form',
  templateUrl: './controller-form.component.html',
  styleUrls: ['./controller-form.component.scss']
})
export class ControllerFormComponent {
  @Input({required: true}) controllerForm!: FormGroup<ControllerForm>;
  @Input() update = false;
  @Output() formConfirm = new EventEmitter<void>();
  @Output() checkAvailability = new EventEmitter<void>();

  createControllerOnClick() {
    this.formConfirm.emit();
  }

  checkAvailabilityOnClick() {
    this.checkAvailability.emit();
  }
}
