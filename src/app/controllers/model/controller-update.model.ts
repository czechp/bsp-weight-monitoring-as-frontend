import {ConnectionParams, ControllerModel, ControllerType} from "./controller.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ipValidator} from "../../shared/validator/ip.validator";
import {ControllerForm} from "./controller-create.model";

export type ControllerUpdateModel = {
  id: number,
  label: string;
  ipAddress: string;
  connectionParams: ConnectionParams;
  type: ControllerType;
}

export function createControllerUpdateForm(controller: ControllerModel) {
  return new FormGroup<ControllerForm>({
    label: new FormControl<string | null>(controller.label, Validators.required),
    ipAddress: new FormControl<string | null>(controller.ipAddress, [Validators.required, ipValidator()]),
    type: new FormControl<ControllerType | null>(controller.type, Validators.required),
    port: new FormControl<number | null>(controller.connectionParams.PORT, Validators.required),
    slot: new FormControl<number | null>(controller.connectionParams.SLOT, Validators.required),
    rack: new FormControl<number | null>(controller.connectionParams.RACK, Validators.required),
  })
}

export function convertControllerFormToUpdateModel(id: number, form: FormGroup<ControllerForm>): ControllerUpdateModel {
  const value = form.getRawValue();
  return {
    id,
    label: value.label as string,
    ipAddress: value.ipAddress as string,
    connectionParams: {
      PORT: value.port as number,
      SLOT: value.slot as number,
      RACK: value.slot as number
    },
    type: value.type as ControllerType
  };
}
