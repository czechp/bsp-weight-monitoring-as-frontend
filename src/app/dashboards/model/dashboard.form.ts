import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DashboardCreateModel} from "./dashboard.model";

export type DashboardCreateForm = {
  title: FormControl<string | null>;
  icon: FormControl<string | null>;
}


export class DashboardFormHandler {
  emptyCreateDashboardForm(): FormGroup<DashboardCreateForm> {
    return new FormGroup<DashboardCreateForm>({
      title: new FormControl<string | null>("", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      icon: new FormControl<string | null>("", [Validators.required ])
    });
  }

  createDashboardModel(createDashboardForm: FormGroup<DashboardCreateForm>):DashboardCreateModel {
    return {
      title: createDashboardForm.get('title')?.value as string,
      icon: createDashboardForm.get('icon')?.value as string
    }
  }
}
