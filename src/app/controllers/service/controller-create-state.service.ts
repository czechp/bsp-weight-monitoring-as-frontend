import {Injectable} from '@angular/core';
import {
  ControllerForm,
  controllerCreateForm,
  controllerCreateFormToModel
} from "../model/controller-create.model";
import {FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {ControllerHttpService} from "./controller-http.service";
import {Router} from "@angular/router";
import {StatementService} from "../../shared/service/statement.service";

@Injectable()
export class ControllerCreateStateService {
  createForm = controllerCreateForm();
  createForm$ = new BehaviorSubject<FormGroup<ControllerForm>>(this.createForm);

  constructor(private httpService: ControllerHttpService, private router: Router, private statement: StatementService) {
  }

  createController() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid)
      return;

    const model = controllerCreateFormToModel(this.createForm);
    this.httpService.createController(model).subscribe(() => {
      this.router.navigate(["controllers"])
      this.statement.showSuccess("Sterownik został dodany")
    })
  }

  checkAvailability() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid)
      return;
    const model = controllerCreateFormToModel(this.createForm);
    this.httpService.checkAvailability(model).subscribe((response) => {
      if(response.available)
        this.statement.showSuccess("Sterownik dostępny")
      else
        this.statement.showError("Nie można nawiązać połączenia z sterownikiem")
    })
  }
}
