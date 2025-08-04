import {Injectable} from '@angular/core';
import {ControllerHttpService} from "./controller-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {
  ControllerModel,
  ControllerState,
  controllerStateToString,
  controllerTurnedOnToString,
  controllerTypeToString
} from "../model/controller.model";
import {InfoRow, InfoRowState} from 'src/app/shared/type/info-row.type';
import {FormGroup} from "@angular/forms";
import {controllerCreateFormToModel, ControllerForm} from "../model/controller-create.model";
import {convertControllerFormToUpdateModel, createControllerUpdateForm} from "../model/controller-update.model";
import {StatementService} from "../../shared/service/statement.service";
import {ControllerActivationModel} from "../model/controller-activation.model";

@Injectable()
export class ControllerDetailsActionsStateService {
  controllerId: number;
  controllerInfo$ = new BehaviorSubject<InfoRow[]>([]);
  controllerUpdateForm: FormGroup<ControllerForm> | null = null;
  controllerUpdateForm$ = new BehaviorSubject<FormGroup<ControllerForm> | null>(null);
  controllerModel$ = new BehaviorSubject<ControllerModel | null>(null);
  controllerModel: ControllerModel | null = null;

  constructor(private httpService: ControllerHttpService, private activatedRoute: ActivatedRoute, private statement: StatementService, private router: Router) {
    this.controllerId = activatedRoute.parent?.snapshot.params['id'];
    this.getController();
  }

  updateController() {
    this.controllerUpdateForm?.markAllAsTouched();
    if (this.controllerUpdateForm?.invalid)
      return;
    const updateModel = convertControllerFormToUpdateModel(this.controllerId, this.controllerUpdateForm as FormGroup<ControllerForm>);
    this.httpService.updateController(updateModel)
      .subscribe(() => {
        this.getController();
        this.statement.showSuccess("Dane zaaktualizowane");
      })
  }

  checkAvailability() {
    const controllerModel = controllerCreateFormToModel(this.controllerUpdateForm as FormGroup<ControllerForm>);
    this.httpService.checkAvailability(controllerModel)
      .subscribe(response => {
        if (response.available)
          this.statement.showSuccess("Sterownik dostępny");
        else
          this.statement.showError("Nie można nawiązać połączenia z sterownikiem");
      })
  }

  removeController() {
    this.httpService.removeControllerById(this.controllerId)
      .subscribe(() => {
        this.statement.showSuccess("Sterownik został usunięty");
        this.router.navigate(['controllers']);
      })
  }

  changeActivation() {
    const activationModel: ControllerActivationModel = {
      id: this.controllerId,
      activation: !this.controllerModel?.activation
    };
    this.httpService.changeActivation(activationModel)
      .subscribe(() => {
        if (activationModel.activation)
          this.statement.showSuccess("Sterownik aktywny");
        else
          this.statement.showSuccess("Sterownik nieaktywny");
        this.getController();
      })
  }

  private getController() {
    this.httpService.getControllerById(this.controllerId)
      .subscribe((controller) => {
        this.createControllerInfo(controller);
        this.createControllerForm(controller);
        this.createControllerModel(controller)
      })
  }

  private createControllerInfo(controller: ControllerModel) {
    function stateToColor(state: ControllerState) {
      switch (state) {
        case ControllerState.AVAILABLE:
          return InfoRowState.OK;
        case ControllerState.UNAVAILABLE:
          return InfoRowState.NOK
      }
    }


    const info: InfoRow[] = [
      {key: "Nazwa", value: controller.label},
      {key: "Adres ip", value: controller.ipAddress},
      {key: "Typ", value: controllerTypeToString(controller.type)},
      {key: "Stan", value: controllerStateToString(controller.state), state: stateToColor(controller.state)},
      {
        key: "Aktywny",
        value: controllerTurnedOnToString(controller.activation),
        state: controller.activation ? InfoRowState.OK : InfoRowState.NOK
      },
      {key: "Port", value: controller.connectionParams.PORT.toString()},
      {key: "Rack", value: controller.connectionParams.RACK.toString()},
      {key: "Slot", value: controller.connectionParams.SLOT.toString()},
    ];
    this.controllerInfo$.next(info);
  }

  private createControllerForm(controller: ControllerModel) {
    this.controllerUpdateForm = createControllerUpdateForm(controller) as FormGroup<ControllerForm>;
    this.controllerUpdateForm$.next(this.controllerUpdateForm);
  }

  private createControllerModel(controller: ControllerModel) {
    this.controllerModel = controller;
    this.controllerModel$.next(controller);
  }
}
