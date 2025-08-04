import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductionLineForm} from "../../model/production-line.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-production-line-form',
  templateUrl: './production-line-form.component.html',
  styleUrls: ['./production-line-form.component.scss']
})
export class ProductionLineFormComponent {
  @Input() productionLineForm!: FormGroup<ProductionLineForm>;
  @Output() onSubmit = new EventEmitter();
  @Input() edit: boolean = false;


  submit(){
    this.productionLineForm.markAllAsTouched();
    this.onSubmit.emit();
  }
}
