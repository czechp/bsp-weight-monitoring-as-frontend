import {StatementKind} from "./statement-kind.type";

export type StatementMessage = {
  type: StatementKind,
  message: string,
}
