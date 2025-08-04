import { Injectable } from '@angular/core';
import {Page} from "../../shared/type/page.type";
import {ProcessValueCreateModel, ProcessValueModel, ProcessValueUpdateModel} from "../model/process-value.model";
import {BACKEND_URL} from "../../shared/configuration/URL";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcessValueHttpService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getProcessValues(controllerId: number) {
    return this.httpClient.get<Page<ProcessValueModel>>(`${BACKEND_URL}/process-values/controllers/${controllerId}`)
      .pipe(
        map((response: Page<ProcessValueModel>) => response.content)
      )
  }

  createProcessValue(createModel: ProcessValueCreateModel) {
    return this.httpClient.post(`${BACKEND_URL}/process-values`, createModel);
  }

  getProcessValueById(processValueId: number) {
    return this.httpClient.get<ProcessValueModel>(`${BACKEND_URL}/process-values/${processValueId}`);
  }

  deleteProcessValue(processValueId: number) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/process-values/${processValueId}`);
  }

  updateProcessValue(updateModel: ProcessValueUpdateModel) {
    return this.httpClient.put(`${BACKEND_URL}/process-values`, updateModel);
  }
}
