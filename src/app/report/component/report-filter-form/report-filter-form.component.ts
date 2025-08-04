import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportFilterForm} from "../../model/report.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-report-filter-form',
  templateUrl: './report-filter-form.component.html',
  styleUrls: ['./report-filter-form.component.scss']
})
export class ReportFilterFormComponent {
  @Input() filterForm!: FormGroup<ReportFilterForm>;
  @Output() applyFilter = new EventEmitter();

  applyFilterOnClick() {
    this.applyFilter.emit();
  }
}
