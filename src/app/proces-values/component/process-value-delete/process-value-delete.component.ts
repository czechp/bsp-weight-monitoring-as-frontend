import {Component, EventEmitter, Output} from '@angular/core';
import {DialogService} from "../../../shared/service/dialog.service";

@Component({
  selector: 'app-process-value-delete',
  templateUrl: './process-value-delete.component.html',
  styleUrls: ['./process-value-delete.component.scss']
})
export class ProcessValueDeleteComponent {
  @Output() processValueDelete = new EventEmitter<void>();

  constructor(private dialogService: DialogService) {
  }

  showConfirmationModal() {
    this.dialogService.showDialog(()=>this.processValueDelete.emit());
  }
}
