import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductionLineModel} from "../../model/production-line.model";
import {DialogService} from "../../../shared/service/dialog.service";
import {ProductionLineForm} from "../../model/production-line.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-production-line-modify',
  templateUrl: './production-line-modify.component.html',
  styleUrls: ['./production-line-modify.component.scss']
})
export class ProductionLineModifyComponent {
  constructor(private dialogService: DialogService) {
  }

  @Input() productionLine!: ProductionLineModel;
  @Output() delete = new EventEmitter();
  @Input() productionLineForm!: FormGroup<ProductionLineForm>;
  @Output() modify = new EventEmitter();

  deleteOnClick() {
    this.dialogService.showDialog(()=>{
      this.delete.emit();
    })
  }

  modifySubmitted() {
    this.modify.emit();
  }
}
