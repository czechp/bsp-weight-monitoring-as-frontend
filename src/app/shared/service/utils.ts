import {ReportShiftModel} from "../../report/model/report.model";

export function booleanToString(state: boolean): string {
  return state ? "YES" : "NO";
}

export function currentTimeToShift(): ReportShiftModel{
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const shiftIStart = new Date(today.getTime());
  shiftIStart.setHours(7, 0, 0, 0);
  const shiftIEnd = new Date(today.getTime());
  shiftIEnd.setHours(15, 0, 0, 0);

  const shiftIIStart = new Date(today.getTime());
  shiftIIStart.setHours(15, 0, 0, 0);
  const shiftIIEnd = new Date(today.getTime());
  shiftIIEnd.setHours(23, 0, 0, 0);

  const shiftIIIStart = new Date(today.getTime());
  shiftIIIStart.setHours(23, 0, 0, 0);
  const shiftIIIEnd = new Date(today.getTime());
  shiftIIIEnd.setDate(shiftIIIEnd.getDate() + 1); // next day
  shiftIIIEnd.setHours(7, 0, 0, 0);

  if (now >= shiftIStart && now < shiftIEnd) {
    return ReportShiftModel.I;
  }

  if (now >= shiftIIStart && now < shiftIIEnd) {
    return ReportShiftModel.II;
  }

  return ReportShiftModel.III;
}
