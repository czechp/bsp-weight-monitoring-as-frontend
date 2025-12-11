import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HistoricalMeasurementsFilterForm} from "../../service/historical-measurements-state.service";

@Component({
  selector: 'app-historical-measurement-filter-form',
  templateUrl: './historical-measurement-filter-form.component.html',
  styleUrls: ['./historical-measurement-filter-form.component.scss']
})
export class HistoricalMeasurementFilterFormComponent {
  @Input() filterForm!: FormGroup<HistoricalMeasurementsFilterForm>;
  @Output()
  filter = new EventEmitter<void>();

  onSubmit() {
    this.filter.emit();
  }
}
