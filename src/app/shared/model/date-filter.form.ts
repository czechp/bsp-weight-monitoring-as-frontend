import {FormControl, FormGroup} from "@angular/forms";

export type DateFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
}

export type SingleDateFilterForm = {
  day: FormControl<string | null>,
}

export enum DateFilterFormRange  {
  DAY, WEEK, MONTH, YEAR
}

export class DateFormHandler {

  getFilterForm(range: DateFilterFormRange): FormGroup<DateFilterForm> {
    const today = new Date();
    const dateAgo = new Date();
    switch (range){
      case DateFilterFormRange.DAY:
        dateAgo.setDate(today.getDate() - 1);
        break;
      case DateFilterFormRange.WEEK:
        dateAgo.setDate(today.getDate() - 7);
        break;
      case DateFilterFormRange.MONTH:
        dateAgo.setMonth(today.getMonth() - 1);
        break;
      case DateFilterFormRange.YEAR:
        dateAgo.setFullYear(today.getFullYear() - 1);
        break;
      default:
        break;
    }

    return new FormGroup<DateFilterForm>({
      from: new FormControl<string | null>(dateAgo.toISOString().split('T')[0]),
      to: new FormControl<string | null>(today.toISOString().split('T')[0])
    })
  }

  getSingleFilterForm() {
    const today = new Date();
    return new FormGroup<SingleDateFilterForm>({
      day: new FormControl<string | null>(today.toISOString().split('T')[0])
    })
  }
}
