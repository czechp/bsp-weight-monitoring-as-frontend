import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProcessValueModel} from "../../model/process-value.model";

@Component({
  selector: 'app-process-values-list',
  templateUrl: './process-values-list.component.html',
  styleUrls: ['./process-values-list.component.scss']
})
export class ProcessValuesListComponent {
  @Input() processValues!: ProcessValueModel[];
  @Output() rowClicked = new EventEmitter<number>();


  rowOnClick(processValueId: number) {
    this.rowClicked.emit(processValueId);
  }
}
