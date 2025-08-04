import {Injectable, OnDestroy} from '@angular/core';
import {ProcessValueForm, ProcessValueFormHandler} from "../model/process-value-form-handler.model";
import {BehaviorSubject, Subscription} from "rxjs";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProcessValueHttpService} from "./process-value-http.service";
import {StatementService} from "../../shared/service/statement.service";

@Injectable()
export class ProcessValueCreateStateService implements OnDestroy {
  processValueCreateForm$ = new BehaviorSubject<FormGroup<ProcessValueForm> | null>(null);
  private processValueCreateForm: FormGroup<ProcessValueForm>;
  private valueTypeChangeSubscription: Subscription;
  private readonly controllerId: number;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: ProcessValueHttpService, private statementService: StatementService, private router: Router) {
    this.controllerId = this.activatedRoute.parent?.snapshot.params['id'];
    [this.processValueCreateForm, this.valueTypeChangeSubscription] = ProcessValueFormHandler.getForm();
    this.processValueCreateForm$.next(this.processValueCreateForm);
  }

  ngOnDestroy(): void {
    this.valueTypeChangeSubscription.unsubscribe();
  }

  createProcessValue() {
    this.processValueCreateForm.markAllAsTouched();
    if (this.processValueCreateForm.invalid)
      return;
    const createModel = ProcessValueFormHandler.convertToCreateModel(this.processValueCreateForm, this.controllerId);
    this.httpClient.createProcessValue(createModel).subscribe(() => {
      this.statementService.showSuccess("I/O zostało dodane");
      this.router.navigate(["../", "process-values"], {relativeTo: this.activatedRoute});
    });
  }
}
