import { Injectable } from '@angular/core';
import {ProductionLineFormHandler} from "../model/production-line.form";
import {ProductionLineAddModel} from "../model/production-line.model";
import {ProductionLineHttpService} from "./production-line-http.service";
import {StatementService} from "../../shared/service/statement.service";
import {Router} from "@angular/router";

@Injectable()
export class ProductionLineAddStateService {
  private formHandler = new ProductionLineFormHandler();
  addProductionLineForm = this.formHandler.emptyProductionLineAddForm();

  constructor(private httpService: ProductionLineHttpService, private statementService: StatementService, private router: Router) { }

  addProductionLine() {
    if(this.addProductionLineForm.invalid)
      return;

    const addProductionLineModel: ProductionLineAddModel = this.formHandler.addFormToAddModel(this.addProductionLineForm);
    this.httpService.addProductionLine(addProductionLineModel).subscribe(()=>{
      this.statementService.showSuccess("Moduł wagowy został dodany");
      this.router.navigate(['/production-lines']);
    });
  }
}
