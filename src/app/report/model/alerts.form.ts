import {FormControl, FormGroup} from "@angular/forms";
import {DateFilterForm, DateFilterFormRange} from "../../shared/model/date-filter.form";

export type AlertFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
  lineName: FormControl<string | null>
}

export class AlertFormHandler {

  getFilterForm(range: DateFilterFormRange): FormGroup<AlertFilterForm> {
    const today = new Date();
    const oneMonthAgo = new Date();
    switch (range){
      case DateFilterFormRange.DAY:
        oneMonthAgo.setDate(today.getDate() - 1);
        break;
      case DateFilterFormRange.YEAR:
        oneMonthAgo.setFullYear(today.getFullYear() - 1);
        break;
      case DateFilterFormRange.MONTH:
        oneMonthAgo.setMonth(today.getMonth() - 1);
        break
      default:
        break;
    }

    return new FormGroup<AlertFilterForm>({
      from: new FormControl<string | null>(oneMonthAgo.toISOString().split('T')[0]),
      to: new FormControl<string | null>(today.toISOString().split('T')[0]),
      lineName: new FormControl<string | null>(null)
    })
  }
}
