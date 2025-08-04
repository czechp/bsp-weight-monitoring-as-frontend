import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ipValidator} from "../../shared/validator/ip.validator";
import {ProductionLineAddModel, ProductionLineModel, ProductionLineModifyModel} from "./production-line.model";

export type ProductionLineForm = {
  name: FormControl<string | null>,
  ipAddress: FormControl<string | null>,
}

export class ProductionLineFormHandler {

  emptyProductionLineAddForm(): FormGroup<ProductionLineForm> {
    return new FormGroup<ProductionLineForm>(
      {
        name: new FormControl<string | null>("", [Validators.required]),
        ipAddress: new FormControl<string | null>("", [Validators.required, ipValidator()]),
      }
    );
  }

  addFormToAddModel(addProductionLineForm: FormGroup<ProductionLineForm>) {
    return addProductionLineForm.value as ProductionLineAddModel;
  }

  productionLineFormFromModel(productionLine: ProductionLineModel): FormGroup<ProductionLineForm> {
    return new FormGroup<ProductionLineForm>({
      name: new FormControl<string | null>(productionLine.name, [Validators.required]),
      ipAddress: new FormControl<string | null>(productionLine.ipAddress, [Validators.required, ipValidator()]),
    })
  }

  modifyFormToModifyModel(formGroup: FormGroup<ProductionLineForm>, id: number): ProductionLineModifyModel {
    return {
      lineId: id,
      name: formGroup.value.name!,
      ipAddress: formGroup.value.ipAddress!
    };
  }
}
