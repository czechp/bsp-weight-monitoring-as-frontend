import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent {
  controlField!: AbstractControl;

  @Input({required: true})
  set formField(control: AbstractControl | null) {
    this.controlField = control as AbstractControl;
  }


}
