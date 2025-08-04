import {ConnectionParams, ControllerType} from "./controller.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ipValidator} from "../../shared/validator/ip.validator";

export type ControllerCreateModel = {
  label: string;
  ipAddress: string;
  connectionParams: ConnectionParams;
  type: ControllerType;
}

export type ControllerForm = {
  label: FormControl<string | null>;
  ipAddress: FormControl<string | null>;
  type: FormControl<ControllerType | null>;
  port: FormControl<number | null>;
  slot: FormControl<number | null>;
  rack: FormControl<number | null>;
}

export function controllerCreateForm(): FormGroup<ControllerForm> {
  return new FormGroup<ControllerForm>({
    label: new FormControl<string | null>("", Validators.required),
    ipAddress: new FormControl<string | null>("", [Validators.required, ipValidator()]),
    type: new FormControl<ControllerType | null>(ControllerType.SIEMENS_S7, Validators.required),
    port: new FormControl<number | null>(102, Validators.required),
    slot: new FormControl<number | null>(1, Validators.required),
    rack: new FormControl<number | null>(0, Validators.required),
  })
}


export function controllerCreateFormToModel(form: FormGroup<ControllerForm>): ControllerCreateModel {
  return {
    label: form.get("label")?.value as string,
    ipAddress: form.get("ipAddress")?.value as string,
    type: form.get("type")?.value as ControllerType,
    connectionParams: {
      RACK: form.get("rack")?.value as number,
      SLOT: form.get("slot")?.value as number,
      PORT: form.get("port")?.value as number,
    }
  }
}
