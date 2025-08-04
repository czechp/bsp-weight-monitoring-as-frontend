import {Component, EventEmitter, Output} from '@angular/core';
import {DialogService} from "../../../shared/service/dialog.service";

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.scss']
})
export class UserRemoveComponent {
  @Output()
  removeUser = new EventEmitter();

  constructor(private dialogService: DialogService) {
  }


  showConfirmationDialog() {
    this.dialogService.showDialog(() => this.removeUser.emit());
  }
}
