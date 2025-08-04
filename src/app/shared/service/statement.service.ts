import {Injectable} from '@angular/core';
import {StatementMessage} from "../type/statement-message.type";
import {BehaviorSubject} from "rxjs";
import {StatementKind} from "../type/statement-kind.type";

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  statement = new BehaviorSubject<StatementMessage | null>(null);

  showInfo(message: string): void {
    this.statement.next({type: StatementKind.INFO, message});
  }

  showSuccess(message: string): void {
    this.statement.next({type: StatementKind.SUCCESS, message});
  }

  showError(message: string): void {
    this.statement.next({type: StatementKind.ERROR, message});
  }
}
