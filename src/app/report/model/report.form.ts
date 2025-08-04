import {FormControl, FormGroup} from "@angular/forms";

export type ReportFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
}

export class ReportFormHandler{

  getFilterForm(): FormGroup<ReportFilterForm> {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    return new FormGroup<ReportFilterForm>({
      from: new FormControl<string | null>(oneMonthAgo.toISOString().split('T')[0]),
      to: new FormControl<string | null>(today.toISOString().split('T')[0])
    })
  }
}
