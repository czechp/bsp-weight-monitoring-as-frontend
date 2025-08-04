import {Component, EventEmitter, Output} from '@angular/core';
import {DialogService} from "../../../shared/service/dialog.service";

@Component({
  selector: 'app-controller-remove',
  templateUrl: './controller-remove.component.html',
  styleUrls: ['./controller-remove.component.scss']
})
export class ControllerRemoveComponent {
  @Output() remove: EventEmitter<void> = new EventEmitter();

  constructor(private dialogService: DialogService) {
  }

  showRemoveConfirmation() {
    this.dialogService.showDialog(()=>this.remove.emit());
  }
}
