import {Component} from '@angular/core';
import {StatementService} from "../../service/statement.service";
import {StatementKind} from "../../type/statement-kind.type";
import {StatementMessage} from "../../type/statement-message.type";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent {
  visibility = false;
  success = false;
  error = false;
  message = "";
  private readonly DURATION = 10000;

  constructor(private statementService: StatementService) {
    this.statementService.statement.subscribe(msg => this.dispatchMessage(msg));
  }

  showStatement() {
    this.visibility = true;
    setTimeout(() => this.visibility = false, this.DURATION);
  }

  dispatchMessage(statement: StatementMessage | null) {
    if (statement) {
      this.message = statement.message;
      switch (statement.type) {
        case StatementKind.INFO:
          this.showInfo();
          break;
        case StatementKind.ERROR:
          this.showError();
          break;
        case StatementKind.SUCCESS:
          this.showSuccess();
      }
      this.showStatement();
    }
  }

  private showInfo() {
    this.success = false;
    this.error = false;
  }

  private showError() {
    this.success = false;
    this.error = true;
  }

  private showSuccess() {
    this.success = true;
    this.error = false;
  }
}
