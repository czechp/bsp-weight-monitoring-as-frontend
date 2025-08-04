import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MemoryTypeHandler, ProcessValueForm} from "../../model/process-value-form-handler.model";

@Component({
  selector: 'app-process-value-form',
  templateUrl: './process-value-form.component.html',
  styleUrls: ['./process-value-form.component.scss']
})
export class ProcessValueFormComponent {
  @Input() processValueForm!: FormGroup<ProcessValueForm>;
  processValueTypesValues = MemoryTypeHandler.getValueTypesValues();
  memoryAddressValues = MemoryTypeHandler.getMemoryTypeValues();
  @Output() confirmed = new EventEmitter<void>();

  submitOnClick() {
    this.confirmed.emit();
  }
}
