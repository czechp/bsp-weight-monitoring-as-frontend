import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../component/confirmation-dialog/confirmation-dialog.component";


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  showDialog(confirm: () => void) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      height: '17rem',
      width: '40rem',
      data: {confirm: confirm}
    });

  }
}
