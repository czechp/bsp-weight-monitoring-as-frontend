import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ConfirmEmailForm} from "../../model/user-confirm-email.model";

@Component({
  selector: 'app-confirm-email-form',
  templateUrl: './confirm-email-form.component.html',
  styleUrls: ['./confirm-email-form.component.scss']
})
export class ConfirmEmailFormComponent {
  @Input({required: true})
  confirmEmailForm!: FormGroup<ConfirmEmailForm>;
  @Output()
  confirmOnClick: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('document:keydown.enter', ['$event'])
  onSubmit() {
    this.confirmOnClick.emit();
  }
}
