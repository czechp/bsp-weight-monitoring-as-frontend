import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DateFilterForm} from "../../model/date-filter.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-filter-form',
  templateUrl: './date-filter-form.component.html',
  styleUrls: ['./date-filter-form.component.scss']
})
export class DateFilterFormComponent {
  @Input() filterForm!: FormGroup<DateFilterForm>;
  @Output() applyFilter = new EventEmitter();

  applyFilterOnClick() {
    this.applyFilter.emit();
  }
}
