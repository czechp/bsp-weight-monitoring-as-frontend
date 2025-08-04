
export type ProcessValueModel = {
  processValue: string;
  id: number;
  controllerId: number;
  label: string;
  memoryAddress: MemoryAddress
}

export type ProcessValueCreateModel = {
  controllerId: number;
  label: string;
  memoryAddress: MemoryAddress;
}


export type MemoryAddress = {
  number: number;
  byteOffset: number;
  bitOffset: number;
  memoryType: MemoryType;
  valueType: ProcessValueType;
}

export enum MemoryType {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
  DATA_BLOCK = "DATA_BLOCK",
}

export enum ProcessValueType {
  BOOLEAN = "BOOLEAN",
  INT = "INT",
  REAL = "REAL",
  DINT = "DINT",
}


export type ProcessValueUpdateModel = {
  processValueId: number;
  label: string;
  memoryAddress: MemoryAddress;
}
