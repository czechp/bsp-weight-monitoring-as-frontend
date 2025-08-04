import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProcessValueHttpService} from "./process-value-http.service";
import {BehaviorSubject, Subscription} from "rxjs";
import {InfoRow} from "../../shared/type/info-row.type";
import {ProcessValueModel} from "../model/process-value.model";
import {StatementService} from "../../shared/service/statement.service";
import {FormGroup} from "@angular/forms";
import {ProcessValueForm, ProcessValueFormHandler} from "../model/process-value-form-handler.model";
import {ProcessValuesStateService} from "./process-values-state.service";


@Injectable()
export class ProcessValueDetailsStateService implements OnDestroy {
  processValueInfo$ = new BehaviorSubject<InfoRow[]>([]);
  processValueUpdateForm$ = new BehaviorSubject<FormGroup<ProcessValueForm> | null>(null);
  private processValueUpdateForm: FormGroup<ProcessValueForm> | null = null;
  private updateSubscription: Subscription | null = null;

  private readonly processValueId = this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private httpService: ProcessValueHttpService, private statementService: StatementService, protected router: Router) {
    this.getProcessValue();
  }

  private getProcessValue() {
    this.httpService.getProcessValueById(this.processValueId)
      .subscribe((processValueModel: ProcessValueModel) => {
        this.handleInfo(processValueModel);
        this.handleUpdateForm(processValueModel);
      })
  }

  deleteProcessValue() {
    this.httpService.deleteProcessValue(this.processValueId)
      .subscribe(() => {
        this.statementService.showSuccess("I/O zostało usunięte");
        this.router.navigate(["controllers"])
      });
  }

  ngOnDestroy(): void {
    this.updateSubscription?.unsubscribe();
  }

  private handleInfo(processValueModel: ProcessValueModel) {
    this.processValueInfo$.next([
      {key: 'Id', value: processValueModel.id.toString()},
      {key: 'Etykieta', value: processValueModel.label},
      {key: 'Wartość', value: processValueModel.processValue.toString()},
      {key: 'Typ pamięci', value: processValueModel.memoryAddress.memoryType},
      {key: 'Typ I/O', value: processValueModel.memoryAddress.valueType},
      {key: 'Nr. bloku', value: processValueModel.memoryAddress.number.toString()},
      {key: 'Offset bajtowy', value: processValueModel.memoryAddress.byteOffset.toString()},
      {key: 'Offset bitowy', value: processValueModel.memoryAddress.bitOffset.toString()},
    ])
  }

  private handleUpdateForm(processValueModel: ProcessValueModel) {
    [this.processValueUpdateForm, this.updateSubscription] = ProcessValueFormHandler.getUpdateForm(processValueModel);
    this.processValueUpdateForm$.next(this.processValueUpdateForm);
  }

  updateProcessValue() {
    this.processValueUpdateForm?.markAllAsTouched();
    if(this.processValueUpdateForm?.invalid)
      return;
    const updateModel = ProcessValueFormHandler.convertToUpdateModel(this.processValueUpdateForm as FormGroup<ProcessValueForm>, this.processValueId);
    this.httpService.updateProcessValue(updateModel)
      .subscribe(() => {
        this.statementService.showSuccess("I/O zostało zaktualizowane");
        this.getProcessValue();
      })
  }
}
