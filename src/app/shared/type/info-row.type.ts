export type InfoRow = {
  key: string;
  value: string;
  state?: InfoRowState
}

export enum InfoRowState {
  OK,
  NOK
}
