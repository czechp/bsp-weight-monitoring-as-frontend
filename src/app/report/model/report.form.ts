import {FormControl, FormGroup} from "@angular/forms";

export type DateFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
}

export class ReportFormHandler{

  getFilterForm(): FormGroup<DateFilterForm> {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    return new FormGroup<DateFilterForm>({
      from: new FormControl<string | null>(oneMonthAgo.toISOString().split('T')[0]),
      to: new FormControl<string | null>(today.toISOString().split('T')[0])
    })
  }
}
