import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProductionLineModel, ProductionLineModifyModel} from "../model/production-line.model";
import {ProductionLineHttpService} from "./production-line-http.service";
import {StatementService} from "../../shared/service/statement.service";
import {FormGroup} from "@angular/forms";
import {ProductionLineForm, ProductionLineFormHandler} from "../model/production-line.form";

@Injectable()
export class ProductionLineModifyStateService {
  productionLines$ = new BehaviorSubject<ProductionLineModel[]>([]);
  selectedProductionLine$ = new BehaviorSubject<ProductionLineModel | null>(null);
  selectedProductionLine: ProductionLineModel | null = null;
  selectedProductionLineForm$ = new BehaviorSubject<FormGroup<ProductionLineForm> | null>(null);
  selectedProductionLineForm: FormGroup | null = null;
  private formHandler = new ProductionLineFormHandler();

  constructor(private httpService: ProductionLineHttpService, private statementService: StatementService) {
    this.getProductionLines();
  }

  getProductionLines() {
    this.httpService.getProductionLines().subscribe(lines => {
      this.productionLines$.next(lines);
    })
  }

  selectProductionLine(productionLine: ProductionLineModel) {
    this.selectedProductionLine = productionLine;
    this.selectedProductionLine$.next(productionLine);
    this.selectedProductionLineForm = this.formHandler.productionLineFormFromModel(productionLine);
    this.selectedProductionLineForm$.next(this.selectedProductionLineForm);
  }

  deleteProductionLine() {
    this.httpService.deleteProductionLine(this.selectedProductionLine!.id).subscribe(() => {
      this.statementService.showSuccess(`Linia produkcyjna ${this.selectedProductionLine!.name} została usunięta`);
      this.getProductionLines();
      this.clearSelectedProductionLine();
    });
  }

  modifyProductionLine() {
    if (this.selectedProductionLineForm?.invalid)
      return;
    const modifyModel: ProductionLineModifyModel = this.formHandler.modifyFormToModifyModel(this.selectedProductionLineForm!, this.selectedProductionLine!.id);
    this.httpService.modifyProductionLine(modifyModel)
      .subscribe(() => {
        this.statementService.showSuccess(`Linia produkcyjna ${this.selectedProductionLine!.name} została zmodyfikowana`);
        this.getProductionLines();
        this.clearSelectedProductionLine();
      });
  }

  private clearSelectedProductionLine() {
    this.selectedProductionLine = null;
    this.selectedProductionLine$.next(null);
  }
}
