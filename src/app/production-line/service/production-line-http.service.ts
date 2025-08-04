import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/configuration/URL";
import {ProductionLineAddModel, ProductionLineModel, ProductionLineModifyModel} from '../model/production-line.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionLineHttpService {

  constructor(private httpClient: HttpClient) { }

  getProductionLines() {
    return this.httpClient.get<ProductionLineModel[]>(`${BACKEND_URL}/production-lines`);
  }

  addProductionLine(addProductionLineModel: ProductionLineAddModel) {
    return this.httpClient.post(`${BACKEND_URL}/production-lines`, addProductionLineModel);
  }

  deleteProductionLine(id: number) {
    return this.httpClient.delete(`${BACKEND_URL}/production-lines/${id}`);
  }

  modifyProductionLine(modifyModel: ProductionLineModifyModel) {
    return this.httpClient.put(`${BACKEND_URL}/production-lines`, modifyModel);
  }
}
