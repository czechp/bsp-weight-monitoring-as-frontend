import {Component, EventEmitter, Output} from '@angular/core';
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-remove-element',
  templateUrl: './remove-element.component.html',
  styleUrls: ['./remove-element.component.scss']
})
export class RemoveElementComponent {
  @Output() confirmDelete = new EventEmitter();

  constructor(private confirmationDialog: DialogService) {
  }

  showConfirmationDialog() {
    this.confirmationDialog.showDialog(() => this.confirmDelete.emit());
  }

}
