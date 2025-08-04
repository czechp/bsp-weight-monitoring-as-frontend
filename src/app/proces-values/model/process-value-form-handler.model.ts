import {FormControl, FormGroup, Validators} from "@angular/forms";

import {
  MemoryType,
  ProcessValueCreateModel,
  ProcessValueModel,
  ProcessValueType,
  ProcessValueUpdateModel
} from "./process-value.model";
import {EnumValueType} from "../../shared/type/enum-value.type";
import {Subscription} from "rxjs";

export type ProcessValueForm = {
  label: FormControl<string | null>;
  memoryAddress: FormGroup<MemoryAddressForm>;
}

function getProcessValueForm(): [FormGroup<ProcessValueForm>, Subscription] {
  const form = new FormGroup<ProcessValueForm>({
    label: new FormControl("", [Validators.required, Validators.minLength(3)]),
    memoryAddress: new FormGroup<MemoryAddressForm>({
        number: new FormControl<number | null>(1, [Validators.required, Validators.min(1)]),
        byteOffset: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
        bitOffset: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
        memoryType: new FormControl<MemoryType | null>(MemoryType.DATA_BLOCK, [Validators.required]),
        valueType: new FormControl<ProcessValueType | null>(ProcessValueType.BOOLEAN, [Validators.required]),
      }
    )
  });

  let subscription = Subscription.EMPTY;
  const valueTypeControl = form.get("memoryAddress.valueType");
  if (valueTypeControl) {
    subscription = valueTypeControl.valueChanges.subscribe(value => {
      const newValueType = value as ProcessValueType;
      if (newValueType === ProcessValueType.BOOLEAN)
        addBitOffset(form);
      else
        removeBitOffset(form);
    })
  }
  return [form,subscription];
}

function addBitOffset(formGroup: FormGroup<ProcessValueForm>): FormGroup<ProcessValueForm> {
  const memoryFormGroup = formGroup.get("memoryAddress") as FormGroup<MemoryAddressForm>;
  if (memoryFormGroup && !memoryFormGroup.contains("bitOffset")) {
      memoryFormGroup.addControl("bitOffset", new FormControl(0, [Validators.required, Validators.min(0)]));
    }
  return formGroup;
}

function removeBitOffset(processFormGroup: FormGroup<ProcessValueForm>): FormGroup<ProcessValueForm> {
  const memoryGroup = processFormGroup.get("memoryAddress") as FormGroup<MemoryAddressForm>;
  if (memoryGroup && memoryGroup.contains("bitOffset")) {
    memoryGroup.removeControl("bitOffset");
  }
  return processFormGroup;
}

function convertToCreateModel(formGroup: FormGroup<ProcessValueForm>, controllerId: number): ProcessValueCreateModel {
  const value = formGroup.getRawValue();
  return <ProcessValueCreateModel>{
    label: value.label as string,
    controllerId: controllerId,
    memoryAddress: {
      number: value.memoryAddress.number as number,
      byteOffset: value.memoryAddress.byteOffset as number,
      valueType: value.memoryAddress.valueType as ProcessValueType,
      memoryType: value.memoryAddress.memoryType as MemoryType,
      bitOffset: value.memoryAddress.bitOffset as number || 0
    }
  }
}

export type MemoryAddressForm = {
  number: FormControl<number | null>;
  byteOffset: FormControl<number | null>;
  bitOffset?: FormControl<number | null>;
  valueType?: FormControl<ProcessValueType | null>;
  memoryType: FormControl<MemoryType | null>;
}

function getValueTypesValues(): EnumValueType[] {
  return [
    {value: ProcessValueType.BOOLEAN, label: "Boolean"},
    {value: ProcessValueType.INT, label: "Int"},
    {value: ProcessValueType.REAL, label: "Real"},
    {value: ProcessValueType.DINT, label: "DInt"},
  ]
}


function getMemoryTypeValues(): EnumValueType[] {
  return [
    {value: MemoryType.DATA_BLOCK, label: "Blok danych"},
    {value: MemoryType.INPUT, label: "Input"},
    {value: MemoryType.OUTPUT, label: "Output"}
  ];
}

function getUpdateForm(processValueModel: ProcessValueModel): [FormGroup<ProcessValueForm>, Subscription] {
  const [form, subscription] = getProcessValueForm();
  form.get("label")?.setValue(processValueModel.label);
  const memoryAddress = form.get("memoryAddress") as FormGroup<MemoryAddressForm>;
  memoryAddress.get("number")?.setValue(processValueModel.memoryAddress.number);
  memoryAddress.get("byteOffset")?.setValue(processValueModel.memoryAddress.byteOffset);
  memoryAddress.get("memoryType")?.setValue(processValueModel.memoryAddress.memoryType);
  memoryAddress.get("bitOffset")?.setValue(processValueModel.memoryAddress.bitOffset);
  memoryAddress.removeControl("valueType");
  return [form, subscription];
}

function convertToUpdateModel(form: FormGroup<ProcessValueForm>, processValueId: number):ProcessValueUpdateModel {
  const value = form.getRawValue();
  return <ProcessValueUpdateModel>{
    processValueId: processValueId,
    label: value.label as string,
    memoryAddress: {
      number: value.memoryAddress.number as number,
      byteOffset: value.memoryAddress.byteOffset as number,
      valueType: ProcessValueType.BOOLEAN,
      memoryType: value.memoryAddress.memoryType as MemoryType,
      bitOffset: value.memoryAddress.bitOffset as number || 0
    }
  }
}

export const ProcessValueFormHandler = {
  getForm: getProcessValueForm,
  getUpdateForm: getUpdateForm,
  convertToCreateModel: convertToCreateModel,
  convertToUpdateModel:convertToUpdateModel
}

export const MemoryTypeHandler = {
  getValueTypesValues,
  getMemoryTypeValues
}
