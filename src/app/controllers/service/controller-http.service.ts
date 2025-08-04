import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ControllerModel} from "../model/controller.model";
import {BACKEND_URL} from "../../shared/configuration/URL";
import {Page} from "../../shared/type/page.type";
import {map, Observable} from "rxjs";
import {ControllerCreateModel} from "../model/controller-create.model";
import {ControllerAvailabilityResponseModel} from "../model/controller-availability-response.model";
import {ControllerUpdateModel} from "../model/controller-update.model";
import {ControllerActivationModel} from "../model/controller-activation.model";

@Injectable({
  providedIn: 'root'
})
export class ControllerHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getControllers() {
    return this.httpClient.get<Page<ControllerModel>>(`${BACKEND_URL}/controllers`)
      .pipe(
        map((res: Page<ControllerModel>) => res.content)
      );
  }

  createController(model: ControllerCreateModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/controllers`, model)
  }

  checkAvailability(model: ControllerCreateModel): Observable<ControllerAvailabilityResponseModel> {
    return this.httpClient.post<ControllerAvailabilityResponseModel>(`${BACKEND_URL}/controllers/availability`, model)
  }

  getControllerById(controllerId: number) {
    return this.httpClient.get<ControllerModel>(`${BACKEND_URL}/controllers/${controllerId}`)
  }

  updateController(updateModel: ControllerUpdateModel) {
    return this.httpClient.put<void>(`${BACKEND_URL}/controllers`, updateModel);
  }

  removeControllerById(controllerId: number) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/controllers/${controllerId}`)
  }

  changeActivation(activationModel: ControllerActivationModel) {
    return this.httpClient.put<void>(`${BACKEND_URL}/controllers/activation`, activationModel);
  }
}
