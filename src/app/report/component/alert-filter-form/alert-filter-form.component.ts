import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AlertFilterForm} from "../../model/alerts.form";
import {ProductionLineModel} from "../../../production-line/model/production-line.model";

type SelectItem = {
  value: string | null;
  viewValue: string;
}

@Component({
  selector: 'app-alert-filter-form',
  templateUrl: './alert-filter-form.component.html',
  styleUrls: ['./alert-filter-form.component.scss']
})
export class AlertFilterFormComponent {
  @Input() filterForm!: FormGroup<AlertFilterForm>;
  @Output() applyFilter = new EventEmitter();
  @Input()  productionLines!: ProductionLineModel [];


  applyFilterOnClick() {
    this.applyFilter.emit();
  }
}
