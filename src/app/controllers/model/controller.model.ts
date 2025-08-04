export type ControllerModel = {
  id: number;
  label: string;
  ipAddress: string;
  connectionParams: ConnectionParams;
  type: ControllerType;
  state: ControllerState;
  activation: boolean;
}

export type ConnectionParams = {
  PORT: number;
  SLOT: number;
  RACK: number;
}

export enum ControllerType {
  SIEMENS_S7 = "SIEMENS_S7",
  ARDUINO = "ARDUINO",
  RASPBERRY_PI = "RASPBERRY_PI",
}

export enum ControllerState {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

export function controllerTypeToString(controllerType: ControllerType): string {
  switch (controllerType) {
    case ControllerType.SIEMENS_S7:
      return "SIEMENS S7";
    case ControllerType.ARDUINO:
      return "ARDUINO";
    case ControllerType.RASPBERRY_PI:
      return "RASPBERRY PI";
  }
}

export function controllerStateToString(state: ControllerState): string {
  {
    switch (state) {
      case ControllerState.AVAILABLE:
        return "Dostępny";
      case ControllerState.UNAVAILABLE:
        return "Niedostępny"
    }
  }
}

export function controllerTurnedOnToString(turnedOn: boolean): string {
  return turnedOn ? "Aktywny" : "Nieaktywny";
}
