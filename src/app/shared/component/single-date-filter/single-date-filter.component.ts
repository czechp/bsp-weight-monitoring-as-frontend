import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DateFilterForm, SingleDateFilterForm} from "../../model/date-filter.form";

@Component({
  selector: 'app-single-date-filter',
  templateUrl: './single-date-filter.component.html',
  styleUrls: ['./single-date-filter.component.scss']
})
export class SingleDateFilterComponent {
  @Input() filterForm!: FormGroup<SingleDateFilterForm>;
  @Output() applyFilter = new EventEmitter();

  applyFilterOnClick() {
    this.applyFilter.emit();
  }
}
