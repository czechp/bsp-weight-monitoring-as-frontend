import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input({required: true})
  registerForm!: FormGroup;

  @Output()
  registerOnClick: EventEmitter<void> = new EventEmitter();

  @HostListener('document:keydown.enter', ['$event'])
  onSubmit() {
    this.registerOnClick.emit();
  }

}
