import {FormControl, FormGroup} from "@angular/forms";

export type DateFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
}

export enum DateFilterFormRange  {
  DAY, MONTH, YEAR
}

export class DateFormHandler {

  getFilterForm(range: DateFilterFormRange): FormGroup<DateFilterForm> {
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

    return new FormGroup<DateFilterForm>({
      from: new FormControl<string | null>(oneMonthAgo.toISOString().split('T')[0]),
      to: new FormControl<string | null>(today.toISOString().split('T')[0])
    })
  }
}
